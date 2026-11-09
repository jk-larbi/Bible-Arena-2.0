import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { useSession } from '../lib/auth';

type Quest = {
  quest_id: string; title: string; description: string; goal_points: number; reward_xp: number;
  starts_at: string; ends_at: string; status: 'active' | 'completed' | 'expired';
  progress_points: number; participants: number; my_points: number;
};
const defaultEndDate = () => { const date = new Date(); date.setDate(date.getDate()+7); return date.toISOString().slice(0,10); };

export default function CommunityQuestsPage() {
  const { user } = useSession();
  const [quests,setQuests]=useState<Quest[]>([]);
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [goal,setGoal]=useState('10000');
  const [reward,setReward]=useState('100');
  const [endsAt,setEndsAt]=useState(defaultEndDate);
  const [loading,setLoading]=useState(true);
  const [saving,setSaving]=useState(false);
  const [message,setMessage]=useState('');
  const load=useCallback(async()=>{
    if(!supabase||!isSupabaseConfigured){setLoading(false);setMessage('Community quests are unavailable right now.');return;}
    const {data,error}=await supabase.rpc('list_community_quests');
    if(error)setMessage('We could not load community quests. Please try again.');
    else setQuests((data||[]) as Quest[]);
    setLoading(false);
  },[]);
  useEffect(()=>{void load();},[load]);
  const createQuest=async()=>{
    if(!user?.id){setMessage('Please sign in to create a community quest.');return;}
    if(!title.trim()){setMessage('Add a title for your quest.');return;}
    const deadline=new Date(`${endsAt}T23:59:59`);
    if(!Number.isFinite(deadline.getTime())||deadline.getTime()<=Date.now()){setMessage('Choose a future deadline.');return;}
    setSaving(true);setMessage('');
    try{
      const {error}=await supabase.rpc('create_community_quest',{p_title:title.trim(),p_description:description.trim(),p_goal_points:Number(goal),p_reward_xp:Number(reward),p_ends_at:deadline.toISOString()});
      if(error)throw error;
      setTitle('');setDescription('');setGoal('10000');setReward('100');setEndsAt(defaultEndDate());
      setMessage('Your community quest is live.');await load();
    }catch(error){setMessage((error as Error).message||'Could not create the quest.');}
    finally{setSaving(false);}
  };
  return <main className="mx-auto max-w-4xl space-y-7 px-4 py-8 text-[#171B24]">
    <div className="flex items-center justify-between"><Link to="/challenges" className="text-sm font-bold text-[#3156C9]">← Scripture Challenges</Link></div>
    <header className="text-center"><span className="rounded-full bg-[#D66B3D]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D66B3D]">Together in the Word</span><h1 className="mt-3 font-serif text-3xl font-extrabold sm:text-4xl">Community Quests</h1><p className="mx-auto mt-2 max-w-xl text-sm text-[#171B24]/70">Work together to reach a shared Bible Arena goal before the deadline. Every scholar's best score for each game level counts once.</p></header>
    {message&&<p role="status" className="rounded-2xl bg-[#F3EBDD] p-3 text-center text-sm">{message}</p>}
    <section className="space-y-4 rounded-3xl border border-[#171B24]/10 bg-white p-5 shadow-xl sm:p-7"><h2 className="font-serif text-xl font-bold">Start a community quest</h2>
      <input value={title} onChange={e=>setTitle(e.target.value)} maxLength={80} placeholder="Quest title" className="w-full rounded-xl border border-[#171B24]/15 p-3 text-sm"/>
      <textarea value={description} onChange={e=>setDescription(e.target.value)} maxLength={300} placeholder="What should the community accomplish?" className="w-full rounded-xl border border-[#171B24]/15 p-3 text-sm"/>
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="space-y-1 text-xs font-semibold text-[#5A6275]">Shared points goal<input type="number" min="100" max="1000000" value={goal} onChange={e=>setGoal(e.target.value)} className="w-full rounded-xl border border-[#171B24]/15 p-3 text-sm text-[#171B24]"/></label>
        <label className="space-y-1 text-xs font-semibold text-[#5A6275]">Reward per scholar (XP)<input type="number" min="0" max="5000" value={reward} onChange={e=>setReward(e.target.value)} className="w-full rounded-xl border border-[#171B24]/15 p-3 text-sm text-[#171B24]"/></label>
        <label className="space-y-1 text-xs font-semibold text-[#5A6275]">Deadline<input type="date" min={new Date().toISOString().slice(0,10)} value={endsAt} onChange={e=>setEndsAt(e.target.value)} className="w-full rounded-xl border border-[#171B24]/15 p-3 text-sm text-[#171B24]"/></label>
      </div>
      <button disabled={saving||!title.trim()} onClick={()=>void createQuest()} className="rounded-xl bg-[#3156C9] px-5 py-3 text-sm font-bold text-white disabled:opacity-50">{saving?'Creating…':'Create quest'}</button>
    </section>
    <section className="space-y-4"><h2 className="font-serif text-2xl font-bold">Current community goals</h2>
      {loading?<div className="h-32 animate-pulse rounded-3xl bg-[#171B24]/5"/>:quests.length===0?<div className="rounded-3xl border border-[#171B24]/10 bg-white px-5 py-12 text-center"><p className="font-serif text-xl font-bold">No community quests yet.</p><p className="mt-2 text-sm text-[#5A6275]">Create the first shared goal and invite everyone to contribute.</p></div>:quests.map(quest=>{
        const progress=Math.min(100,Math.round(Number(quest.progress_points)/Math.max(1,quest.goal_points)*100));
        return <article key={quest.quest_id} className="space-y-3 rounded-3xl border border-[#171B24]/10 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3"><div><span className="text-[10px] font-bold uppercase tracking-wider text-[#D66B3D]">{quest.status}</span><h3 className="font-serif text-xl font-bold">{quest.title}</h3><p className="mt-1 text-sm text-[#5A6275]">{quest.description}</p></div><div className="rounded-xl bg-[#F3EBDD] px-3 py-2 text-right"><p className="text-[10px] uppercase text-[#5A6275]">Reward per contributor</p><p className="font-mono text-lg font-bold text-[#D66B3D]">+{quest.reward_xp} XP</p></div></div>
          <div className="flex items-center justify-between text-xs font-semibold"><span>{Number(quest.progress_points).toLocaleString()} / {Number(quest.goal_points).toLocaleString()} points</span><span>{progress}%</span></div>
          <div className="h-3 overflow-hidden rounded-full bg-[#171B24]/10"><div className="h-full rounded-full bg-[#3156C9] transition-all" style={{width:`${progress}%`}}/></div>
          <div className="flex flex-wrap justify-between gap-2 text-[11px] text-[#5A6275]"><span>{quest.participants} contributing scholars</span><span>Your contribution: {Number(quest.my_points).toLocaleString()} points</span><span>Ends {new Date(quest.ends_at).toLocaleDateString()}</span></div>
        </article>;
      })}
    </section>
  </main>;
}

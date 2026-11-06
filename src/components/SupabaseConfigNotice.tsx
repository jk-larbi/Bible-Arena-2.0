import React, { useState } from 'react';
import { Database, Copy, Check, ExternalLink } from 'lucide-react';
import { SUPABASE_SQL_SCHEMA } from '../data/sqlSchema';

interface SupabaseConfigNoticeProps {
  onDismiss?: () => void;
}

export const SupabaseConfigNotice: React.FC<SupabaseConfigNoticeProps> = ({ onDismiss }) => {
  const [copied, setCopied] = useState(false);
  const [showSql, setShowSql] = useState(false);

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-[#171B24] text-[#F3EBDD] rounded-3xl p-6 md:p-8 shadow-xl my-6 border border-white/10">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#D66B3D] text-white flex items-center justify-center shrink-0 shadow-md">
          <Database className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <h3 className="font-serif font-bold text-xl text-white">Supabase Backend Not Connected</h3>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Configuration Required for Multiplayer & Cloud Save
            </span>
          </div>
          <p className="text-sm text-[#F3EBDD]/80 mb-4 leading-relaxed">
            BibleArena 2.0 uses Supabase for player profiles, multiplayer rooms, leaderboards, and persistent progress. To enable live sync and competitive multiplayer, connect your Supabase project by adding <code className="bg-white/10 px-2 py-0.5 rounded text-amber-200 text-xs">VITE_SUPABASE_URL</code> and <code className="bg-white/10 px-2 py-0.5 rounded text-amber-200 text-xs">VITE_SUPABASE_PUBLISHABLE_KEY</code> in your environment secrets.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setShowSql(!showSql)}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              {showSql ? 'Hide Database SQL Schema' : 'View Complete Database SQL Setup'}
            </button>
            <button
              onClick={handleCopySql}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D66B3D] hover:bg-[#C05A2F] text-white font-semibold text-xs transition-colors cursor-pointer shadow-md"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied SQL to Clipboard!' : 'Copy Supabase SQL Schema'}</span>
            </button>
          </div>

          {showSql && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-amber-200">sqlSchema.sql</span>
                <span className="text-[11px] text-white/50">Copy and run this in your Supabase SQL Editor</span>
              </div>
              <pre className="bg-[#0A0D14] text-emerald-400 p-4 rounded-2xl text-xs overflow-x-auto max-h-80 border border-white/10 font-mono">
                {SUPABASE_SQL_SCHEMA}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

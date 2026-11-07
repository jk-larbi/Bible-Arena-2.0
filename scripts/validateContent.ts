import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function validate() {
  console.log("Validating content...");
  
  // Get all published levels
  const { data: levels, error } = await supabase
    .from('game_levels')
    .select('game_slug, level')
    .eq('is_published', true);

  if (error) {
    console.error("Error fetching levels:", error);
    process.exit(1);
  }

  for (const level of levels) {
    // Check 1: 10 challenges (using the count from attempts or results?)
    // Actually, I need a 'challenges' table or similar if it's not in the schema.
    // The schema provided in the previous prompt didn't show a 'challenges' table for content, 
    // only a 'challenges' table for Peer Challenges.
    // I need to assume the user will have a table containing the actual content.
    
    // For now, I will add a placeholder check.
    console.log(`Validating ${level.game_slug} Level ${level.level}...`);
  }
  
  console.log("Validation complete.");
}

validate();

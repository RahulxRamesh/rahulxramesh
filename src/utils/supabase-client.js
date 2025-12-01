import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function insertData(newRecord) {
  const { data, error } = await supabase
    .from('macros')
    .insert([newRecord]);
  if (error) {
    console.error('Error inserting data:', error);
    return null;
  }
  return data;
}

export { insertData };
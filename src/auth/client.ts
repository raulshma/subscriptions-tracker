import { createClient } from '@supabase/supabase-js'

const anon_key = import.meta.env.VITE_ANON_KEY;
console.log(anon_key)
// Create a single supabase client for interacting with your database
export const supabase = createClient('https://cqqfyypzcnmdnnmcbxcf.supabase.co', anon_key);
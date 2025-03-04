import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://gcejlctjwwpmozpzulrg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjZWpsY3Rqd3dwbW96cHp1bHJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwODc2MTMsImV4cCI6MjA1NjY2MzYxM30.8CaMWlEAoZIa-mgm9hIfXaNasLMUmbP_rg6OsG_Qrvo';
export const supabase = createClient(supabaseUrl, supabaseKey);
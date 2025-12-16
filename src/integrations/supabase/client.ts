import { createClient } from '@supabase/supabase-js';

// 1. PASTE YOUR URL HERE (keep the quotes)
const SUPABASE_URL = "https://mgfdqtzvbvnsghcpjkzo.supabase.co"; 

// 2. PASTE YOUR KEY HERE (keep the quotes)
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nZmRxdHp2YnZuc2doY3Bqa3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4OTc1NDYsImV4cCI6MjA4MTQ3MzU0Nn0.8bO2J_KGWNNRO6U3w6z4T0oqbu_wFetEU5qGsQo_Fgg";

// --- Do not touch below this line ---
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
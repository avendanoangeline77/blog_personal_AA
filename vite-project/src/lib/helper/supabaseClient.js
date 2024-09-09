import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://hoyihamoufprtvcsbals.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhveWloYW1vdWZwcnR2Y3NiYWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDQ5MDcsImV4cCI6MjA0MTQ4MDkwN30.p5Rj6hvxQKNryKikFWEdrBDuyvmn_95pSGxH61TWKWc')

export default supabase;

import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://rasbjpjzxahtfglrzqfp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhc2JqcGp6eGFodGZnbHJ6cWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1Njg3NzIsImV4cCI6MjA3NTE0NDc3Mn0.LvOxe7v8RzEO4LcYE3o9mkOHbzj2x-psCXCvbdv_DH0"
export const supabaseConf = {
  supabaseUrl,
  supabaseKey
}
export const supabase = createClient(supabaseUrl, supabaseKey)
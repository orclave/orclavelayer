import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://irqwpaiiofghlhrikmyr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlycXdwYWlpb2ZnaGxocmlrbXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MjcwMjcsImV4cCI6MjA4ODMwMzAyN30.KrlT6K08_7_dZRx9SBsCfiHDAkS8MSqbQRaYONvhBTI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sfcpfqiwonajmdzcthcb.supabase.co'
const supabaseKey = process.env.SUPABASE_SECRET
export const supabase = createClient(supabaseUrl, supabaseKey)
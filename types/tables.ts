import { Database } from '@/database.types';

export type TableName = keyof Database['public']['Tables'];

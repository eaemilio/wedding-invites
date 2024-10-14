import { useQuery } from '@tanstack/react-query';
import { createClient } from './client';
import { TableName } from '@/types/tables';

type Props = {
  select: string;
  table: TableName;
  filters?: Condition[] | null;
  range?: number[] | null;
  single: boolean;
};

type Condition = {
  key: string;
  value: string | boolean | number;
};

export const UseSupaDataFilter = <T>({
  select = '*',
  table,
  filters = null,
  range = null,
  single = true,
}: Props) => {
  const fetchData = async () => {
    const client = createClient();
    let query = client.from(table).select(select);

    if (filters) {
      filters.map((f) => {
        query = query.eq(f.key, f.value);
      });
    }

    if (range) {
      const [from, to] = range;
      query = query.range(from, to);
    }

    if (single) {
      return await query.single<T>();
    }

    return await query.returns<T>();
  };

  const {
    data: result,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['table', table, filters, range],
    queryFn: fetchData,
  });

  return { result, isLoading, isFetching, isSuccess, isError, refetch };
};

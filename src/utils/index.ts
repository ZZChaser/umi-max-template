import { Key } from 'react';

type MinColumn = {
  key?: Key;
  dataIndex?: Key | Key[];
};

export function mergeColumns(
  preColumns: MinColumn[],
  nextColumns: Partial<MinColumn>[],
): MinColumn[] {
  const columnMap = new Map();
  preColumns.forEach((column) => {
    const key = column.key || column.dataIndex;
    columnMap.set(key, column);
  });

  nextColumns.forEach((column) => {
    const key = column.key || column.dataIndex;

    const preColumn = columnMap.get(key);
    if (preColumn) {
      Object.assign(preColumn, column);
    } else {
      columnMap.set(key, column);
    }
  });

  return Array.from(columnMap.values());
}

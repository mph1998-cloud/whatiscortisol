import { useState, useEffect } from 'react';
import { Tool } from '../types';

export function useSpreadsheetData(sheetId: string) {
  const [data, setData] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`
        );
        const text = await response.text();
        const jsonData = JSON.parse(text.substring(47).slice(0, -2));
        
        const tools = jsonData.table.rows.map((row: any) => ({
          name: row.c[0]?.v || '',
          description: row.c[1]?.v || '',
          category: row.c[2]?.v || '',
          effectiveness: row.c[3]?.v || 0,
          link: row.c[4]?.v || ''
        }));
        
        setData(tools);
        setLoading(false);
      } catch (err) {
        setError('Failed to load data from spreadsheet');
        setLoading(false);
      }
    };

    fetchData();
  }, [sheetId]);

  return { data, loading, error };
}
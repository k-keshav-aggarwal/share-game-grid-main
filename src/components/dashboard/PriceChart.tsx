import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { hour: '00:00', price: 0.12 },
  { hour: '03:00', price: 0.10 },
  { hour: '06:00', price: 0.14 },
  { hour: '09:00', price: 0.16 },
  { hour: '12:00', price: 0.11 },
  { hour: '15:00', price: 0.13 },
  { hour: '18:00', price: 0.22 },
  { hour: '21:00', price: 0.19 },
  { hour: '24:00', price: 0.15 },
];

export const PriceChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--teal-accent))" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="hsl(var(--teal-accent))" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="hour" 
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
          tickLine={{ stroke: 'hsl(var(--border))' }}
        />
        <YAxis 
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
          tickLine={{ stroke: 'hsl(var(--border))' }}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '6px',
          }}
          formatter={(value: number) => [`$${value}/kWh`, 'Price']}
        />
        <Area 
          type="monotone" 
          dataKey="price" 
          stroke="hsl(var(--teal-accent))" 
          strokeWidth={2}
          fill="url(#priceGradient)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

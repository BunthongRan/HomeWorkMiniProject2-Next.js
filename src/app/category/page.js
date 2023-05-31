import CardCategory from '@/component/CategoryCard';
import React from 'react';

export default async function Categories() {
  const categories = await fetchCategory();
  return (
    
    <div className="flex min-h-screen flex-wrap items-center justify-between p-10">
      {categories.map((category) => (
        <CardCategory
          key={category.id}
          image={category.image}
          name={category.name}
        />
      ))}
    </div>
  );
}

async function fetchCategory() {
  const response = await fetch(`https://api.escuelajs.co/api/v1/categories`, {
    cache: 'no-store',
  });
  return response.json();
}

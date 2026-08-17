const categories = [
  { title: 'Construcción', detail: 'Herramientas' },
  { title: 'Mantenimiento', detail: 'Electricidad' },
  { title: 'Hogar', detail: 'Plomería' },
  { title: 'Trabajo', detail: 'Seguridad industrial' },
]

export default function Stats() {
  return (
    <section className="categories py-12">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {categories.map((category) => (
          <div key={category.title} className="category-card p-4 rounded-lg text-center">
            <div className="category-title text-lg font-bold">{category.title}</div>
            <div className="category-detail text-sm mt-1">{category.detail}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

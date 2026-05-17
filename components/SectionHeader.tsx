interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ title, subtitle, align = 'left' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-2 mb-10 ${alignClass}`}>
      <h2 className="font-display text-4xl font-bold text-charcoal leading-tight">{title}</h2>
      {subtitle && <p className="text-silver-dark text-lg max-w-2xl">{subtitle}</p>}
    </div>
  )
}

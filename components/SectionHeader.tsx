interface SectionHeaderProps {
  id?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  rule?: boolean
}

export default function SectionHeader({ id, title, subtitle, align = 'left', rule = true }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-2.5 mb-10 ${alignClass}`}>
      {rule && <div className={`amc-rule ${align === 'center' ? 'mx-auto' : ''}`} aria-hidden="true" />}
      <h2 id={id} className="font-display text-4xl lg:text-5xl font-bold text-charcoal leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-silver-dark text-base max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}

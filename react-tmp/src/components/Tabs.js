const nameMap = {
  Simple:'简洁',
  Playful: '俏皮',
  Elegant:'优雅',
  Brutalist:'野性'
}
export function Tabs({ tabs, selected, onChange, className, iconClassName }) {
  return (
    <div className="flex -mx-4 overflow-auto sm:mx-0">
      <ul
        className="inline-grid flex-none px-4 gap-x-2 sm:px-0 xl:gap-x-6"
        style={{ gridTemplateColumns: `repeat(${Object.keys(tabs).length}, minmax(6rem, 1fr))` }}
      >
        {Object.entries(tabs).map(([name, icon]) => (
          <li key={name}>
            <button
              type="button"
              onClick={() => onChange(name)}
              className={`group text-sm font-semibold w-full flex flex-col items-center ${
                selected === name ? className : ''
              }`}
            >
              <svg
                width="48"
                height="48"
                fill="none"
                aria-hidden="true"
                className={`mb-6 ${
                  selected === name
                    ? iconClassName
                    : 'text-slate-300 group-hover:text-slate-400 dark:text-slate-600 dark:group-hover:text-slate-500'
                }`}
              >
                {icon(selected === name)}
              </svg>
              {nameMap[name]||name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

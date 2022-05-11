import {
  IconContainer,
  Caption,
  BigText,
  Paragraph,
  Link,
  Widont,
  themeTabs,
} from '@/components/home/common'
import { Tabs } from '@/components/Tabs'
import { CodeWindow } from '@/components/CodeWindow'
import { useEffect, useRef, useState } from 'react'
import tailwindColors from 'tailwindcss/colors'
import { AnimatePresence, motion } from 'framer-motion'
import { font as pallyVariable } from '@/fonts/generated/Pally-Variable.module.css'
import { font as sourceSerifProRegular } from '@/fonts/generated/SourceSerifPro-Regular.module.css'
import { font as ibmPlexMonoRegular } from '@/fonts/generated/IBMPlexMono-Regular.module.css'
import { font as synonymVariable } from '@/fonts/generated/Synonym-Variable.module.css'
import { Token } from '@/components/Code'
import clsx from 'clsx'
import { GridLockup } from '@/components/GridLockup'
import { tokens } from '@/samples/customization.js?highlight'
const defaultSampleBody =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue gravida cras quis ac duis pretium ullamcorper consequat. Integer pellentesque eu.'

const themes = {
  Simple: {
    font: 'Inter',
    fontStacks: [
      ['Inter', 'system-ui', 'sans-serif'],
      ['Inter', 'system-ui', 'sans-serif'],
    ],
    bodySize: '14pt',
    colors: {
      primary: 'blue',
      secondary: 'slate',
    },
  },
  Playful: {
    font: 'Pally',
    fontStacks: [
      ['Pally', 'Comic Sans MS', 'sans-serif'],
      ['Pally', 'Comic Sans MS', 'sans-serif'],
    ],
    bodySize: '14pt',
    classNameDisplay: `${pallyVariable} font-medium`,
    classNameBody: pallyVariable,
    colors: {
      primary: 'rose',
      secondary: 'violet',
    },
  },
  Elegant: {
    font: 'Source Serif Pro',
    fontStacks: [
      ['Source Serif Pro', 'Georgia', 'serif'],
      ['Synonym', 'system-ui', 'sans-serif'],
    ],
    bodySize: '14pt',
    classNameDisplay: sourceSerifProRegular,
    classNameBody: synonymVariable,
    colors: {
      primary: 'slate',
      secondary: 'emerald',
    },
  },
  Brutalist: {
    font: 'IBM Plex Mono',
    fontStacks: [
      ['IBM Plex Mono', 'Menlo', 'monospace'],
      ['IBM Plex Mono', 'Menlo', 'monospace'],
    ],
    bodySize: '14pt',
    classNameDisplay: ibmPlexMonoRegular,
    classNameBody: ibmPlexMonoRegular,
    sampleBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue gravida cras quis ac duis pretium ullamcorper consequat.',
    colors: {
      primary: 'gray',
      secondary: 'teal',
    },
  },
}

export default function Customization() {
  const [theme, setTheme] = useState('Simple')

  return (
    <section id="customization" className='h-screen pt-4 overflow-hidden'>
      <div className="px-4 mx-auto overflow-hidden max-w-7xl sm:px-6 md:px-8">
        <IconContainer
          className="dark:bg-pink-500 dark:highlight-white/30"
          light={require('@/img/icons/home/customization.png').default}
          dark={require('@/img/icons/home/dark/customization.png').default}
        />
        <Caption className="text-pink-500 dark:text-pink-400">定制</Caption>
        <BigText>
          <Widont>你可以继承它、扩展它、改变它</Widont>
        </BigText>
        <Paragraph as="div">
          <p>
          Tailwind 包含一组精心设计的开箱即用默认值，但实际上所有内容都可以自定义 - 从调色板到间距比例到框阴影到鼠标光标。
          </p>
          <p>
            通过 tailwind.config.js 文件来打造自己的设计系统, 然后让 Tailwind 将其转换为自己的自定义 CSS 框架。
          </p>
        </Paragraph>
        <div className="mt-10">
          <Tabs
            tabs={themeTabs}
            selected={theme}
            onChange={setTheme}
            className="text-pink-500 dark:text-pink-400"
            iconClassName="text-pink-500 dark:text-pink-400"
          />
        </div>
      </div>
      <GridLockup
        className="mt-10 xl:mt-2"
        beams={6}
        left={
          <div className="relative z-10 px-6 py-5 my-auto bg-white rounded-lg shadow-xl ring-1 ring-slate-900/5 xl:mt-18 dark:bg-slate-800">
            <div className="absolute inset-x-0 border-t border-b pointer-events-none inset-y-5 border-slate-100 dark:border-slate-700" />
            <div className="absolute inset-y-0 border-l border-r pointer-events-none inset-x-6 border-slate-100 dark:border-slate-700" />
            <div className="px-6 py-6 overflow-hidden bg-slate-50 sm:py-9 lg:py-6 xl:py-9 dark:bg-slate-900/50">
              <div className="sm:flex lg:block xl:flex">
                <div className="relative flex flex-auto min-w-0">
                  <div className="flex-none w-full">
                    <h3 className="sr-only">Typography</h3>
                    <ul className="space-y-8">
                      <li>
                        <dl className="grid">
                          <div className="pb-1 font-mono text-xs leading-5 border-b border-slate-200 text-slate-500 dark:border-slate-200/10">
                            <dt className="sr-only">CSS class</dt>
                            <dd>font-display</dd>
                          </div>
                          <div className="col-start-2 pb-1 font-mono text-xs leading-5 text-right border-b text-slate-400 border-slate-200 dark:text-slate-500 dark:border-slate-200/10">
                            <dt className="sr-only">Font name</dt>
                            <AnimatePresence initial={false} exitBeforeEnter>
                              <motion.dd
                                key={themes[theme].font}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                {themes[theme].font}
                              </motion.dd>
                            </AnimatePresence>
                          </div>
                          <div className="col-span-2 mt-4 text-4xl sm:text-5xl lg:text-4xl xl:text-5xl text-slate-900 dark:text-slate-200">
                            <dt className="sr-only">Sample</dt>
                            <AnimatePresence initial={false} exitBeforeEnter>
                              <motion.dd
                                key={theme}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={themes[theme].classNameDisplay}
                              >
                                AaBbCc
                              </motion.dd>
                            </AnimatePresence>
                          </div>
                        </dl>
                      </li>
                      <li>
                        <dl className="grid">
                          <div className="pb-1 font-mono text-xs leading-5 border-b border-slate-200 text-slate-500 dark:border-slate-200/10">
                            <dt className="sr-only">CSS class</dt>
                            <dd>font-body</dd>
                          </div>
                          <div className="col-start-2 pb-1 font-mono text-xs leading-5 text-right border-b text-slate-400 border-slate-200 dark:text-slate-500 dark:border-slate-200/10">
                            <dt className="sr-only">Font size</dt>
                            <AnimatePresence initial={false} exitBeforeEnter>
                              <motion.dd
                                key={themes[theme].bodySize}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                {themes[theme].bodySize}
                              </motion.dd>
                            </AnimatePresence>
                          </div>
                          <div className="col-span-2 mt-4 text-sm leading-6 text-slate-700 dark:text-slate-400">
                            <dt className="sr-only">Sample</dt>
                            <AnimatePresence initial={false} exitBeforeEnter>
                              <motion.dd
                                key={theme}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className={themes[theme].classNameBody}
                              >
                                {themes[theme].sampleBody || defaultSampleBody}
                              </motion.dd>
                            </AnimatePresence>
                          </div>
                        </dl>
                      </li>
                    </ul>
                  </div>
                  <div
                    aria-hidden="true"
                    className="w-full flex-none -ml-full pointer-events-none pt-[10.125rem] flex text-sm leading-6 invisible"
                  >
                    {Object.keys(themes).map((theme, i) => (
                      <div
                        key={theme}
                        className={clsx(
                          'w-full flex-none',
                          i > 0 && '-ml-full',
                          themes[theme].classNameBody
                        )}
                      >
                        {themes[theme].sampleBody || defaultSampleBody}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-none mt-6 sm:mt-0 lg:mt-6 xl:mt-0 sm:ml-10 lg:ml-0 xl:ml-10">
                  <h3 className="sr-only">Colors</h3>
                  <ul className="space-y-6">
                    {Object.entries(themes[theme].colors).map(([name, color], index) => (
                      <li
                        key={name}
                        className={index === 0 ? undefined : 'hidden sm:block lg:hidden xl:block'}
                      >
                        <dl className="grid p-3 bg-white rounded-lg shadow-md text-slate-500 dark:bg-slate-900 dark:ring-1 dark:ring-white/10">
                          <div className="font-mono text-xs">
                            <dt className="sr-only">CSS class prefix</dt>
                            <dd>bg-{name}</dd>
                          </div>
                          <div className="col-start-2 font-mono text-xs text-right">
                            <dt className="sr-only">Range</dt>
                            <dd>50-900</dd>
                          </div>
                          <div className="col-span-2 mt-4">
                            <dt className="sr-only">Sample</dt>
                            <dd>
                              <ul className="grid grid-cols-5 gap-2">
                                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((key) => (
                                  <motion.li
                                    key={key}
                                    className="rounded-sm pt-full sm:w-8 lg:w-auto xl:w-8 ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10"
                                    initial={false}
                                    animate={{
                                      backgroundColor: tailwindColors[color][key],
                                    }}
                                  />
                                ))}
                              </ul>
                            </dd>
                          </div>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        }
        right={
          <CodeWindow>
            <CodeWindow.Code
              tokens={tokens}
              tokenComponent={CustomizationToken}
              tokenProps={{ theme }}
              transformTokens={(token) => {
                if (typeof token === 'string' && token.includes('__SECONDARY_COLOR__')) {
                  return ['__SECONDARY_COLOR__', token]
                }
                return token
              }}
            />
          </CodeWindow>
        }
      />
    </section>
  )
}

function CustomizationToken({ theme, ...props }) {
  const { token } = props
  const initial = useRef(true)

  useEffect(() => {
    initial.current = false
  }, [])

  if (token[0] === 'string' && token[1].startsWith("'font-")) {
    let [i, j] = token[1].match(/[0-9]+/g).map((x) => parseInt(x, 10))

    return (
      <span className="token string">
        {"'"}
        <span
          className={clsx('code-highlight', { 'animate-flash-code': !initial.current })}
          key={themes[theme].fontStacks[i][j]}
        >
          {themes[theme].fontStacks[i][j]}
        </span>
        {"'"}
      </span>
    )
  }

  if (token[0] === 'string' && token[1].startsWith("'color-")) {
    const [, name, shade] = token[1].substr(1, token[1].length - 2).split('-')
    const color = tailwindColors[themes[theme].colors[name]][shade]

    return (
      <span className="token string">
        {"'"}
        <span
          className={clsx('code-highlight', { 'animate-flash-code': !initial.current })}
          key={color}
        >
          {color}
        </span>
        {"'"}
      </span>
    )
  }

  if (token[0] === '__SECONDARY_COLOR__') {
    let name = Object.keys(themes[theme].colors)[1]
    return token[1].split('__SECONDARY_COLOR__').map((part, i) =>
      i % 2 === 0 ? (
        part
      ) : (
        <span
          className={clsx('code-highlight', { 'animate-flash-code': !initial.current })}
          key={name}
        >
          {name}
        </span>
      )
    )
  }

  return <Token {...props} />
}

'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '../app/contexts/language-context'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-xs"
      >
        EN
      </Button>
      <Button
        variant={language === 'pt-br' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('pt-br')}
        className="text-xs"
      >
        PT
      </Button>
    </div>
  )
}

import React from 'react'
import { Download, Lightbulb } from 'lucide-react'

interface DownloadMarkdownProps {
  filename: string
  content: string
}

export function DownloadMarkdown({ filename, content }: DownloadMarkdownProps) {
  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div style={{
      marginBottom: '2rem',
      padding: '1rem 1.5rem',
      background: '#fafafa',
      borderRadius: '10px',
      border: '1px solid #e5e5e5'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <button
          onClick={handleDownload}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.1rem',
            background: '#18181b',
            color: '#fafafa',
            border: '1px solid #27272a',
            borderRadius: '6px',
            fontSize: '0.875rem',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: '"Noto Sans KR", -apple-system, sans-serif',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#27272a'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#18181b'
          }}
        >
          <Download size={16} />
          마크다운 다운로드
        </button>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#71717a',
          fontSize: '0.85rem'
        }}>
          <Lightbulb size={15} style={{ color: '#a1a1aa' }} />
          <span>다운로드 후 <code style={{
            background: '#f4f4f5',
            padding: '0.15rem 0.4rem',
            borderRadius: '4px',
            fontSize: '0.8rem',
            color: '#3f3f46',
            border: '1px solid #e4e4e7'
          }}>~/.claude/agents/</code> 폴더에 복사하여 사용하세요</span>
        </div>
      </div>
    </div>
  )
}

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
      background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%)',
      borderRadius: '12px',
      border: '1px solid #d0d9f0'
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
            padding: '0.75rem 1.25rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.95rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: '"Noto Sans KR", sans-serif'
          }}
        >
          <Download size={18} />
          마크다운 다운로드
        </button>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#5a6a8a',
          fontSize: '0.9rem'
        }}>
          <Lightbulb size={16} style={{ color: '#f59e0b' }} />
          <span>다운로드 후 <code style={{
            background: '#e2e8f0',
            padding: '0.15rem 0.4rem',
            borderRadius: '4px',
            fontSize: '0.85rem'
          }}>~/.claude/agents/</code> 폴더에 복사하여 사용하세요</span>
        </div>
      </div>
    </div>
  )
}

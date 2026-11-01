'use client'
import { useAuthStore } from '@/store/auth-store'

interface PageHeaderProps {
    title: string;
    subTitle?: string
}


const PageHeader = ({title, subTitle}: PageHeaderProps) => {
    
    const {user} = useAuthStore()
  return (
     <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-muted-foreground text-sm">
          {subTitle}
        </p>
      </div>
  )
}

export default PageHeader
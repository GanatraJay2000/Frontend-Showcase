import React from 'react'
import { Button } from '../ui/button'
import { X } from 'lucide-react'

function SidebarClose({sideBarOpen, setSideBarOpen}: {sideBarOpen: boolean, setSideBarOpen: (open: boolean) => void}) {
  return (
    <Button
          size="icon"
          onClick={() => setSideBarOpen(!sideBarOpen)}
          variant="outline"
          className="md:hidden mb-5  z-10"
        >
          <X />
        </Button>
  )
}

export default SidebarClose

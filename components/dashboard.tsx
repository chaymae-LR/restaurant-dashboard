"use client"

import React, { useState } from "react"
import SideBareContent from "./sidebare-content";
import { HandPlatter, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function RestaurantDashboard() {
    //Declaration d'un state pour gerer l'affichage de la barre lateral
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:from-zinc-950">
              <aside className="hidden lg:block w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                <SideBareContent />
              </aside>

              {/*  Affichage conditionnel de la barre latérale sur les petits ecrans*/}
              {
                isSidebarOpen && (
                  <div className="fixed inset-0 z-50 lg:hidden">
                     <div className="absolute inset-0 bg-zinc-900/50 backdrop-blur-sm">
                       <aside className="absolute left-0 top-0 h-full w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                             <div className="flex items-center justify-between border-b  border-zinc-200 p-4 dark:border-zinc-800">
                                  <div className="flex items-center gap-2 ">
                                      <HandPlatter className="h-6 w-6 text-amber-500"/>
                                        <span className="text-lg font-semibold">Gu<span className="text-amber-500">s</span>tia</span>
                                  </div>
                                  <Button size={"icon"} variant={"ghost"} >
                                          <X className="h-5 w-5" />
                                  </Button>
                             </div>
                       </aside>

                     </div>
                  </div>
                )
              }
        </div>
    )
}  

export default RestaurantDashboard
"use client"

import React, { useState } from "react"
import SideBareContent from "./sidebare-content";

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
                    <div className="absulute"></div>
                  </div>
                )
              }
        </div>
    )
}  

export default RestaurantDashboard
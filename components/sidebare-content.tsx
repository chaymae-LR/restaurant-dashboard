import React from "react"
import { Calendar, ChefHat, HandPlatter, Home, MenuIcon, MessageSquare, Settings, ShoppingBag, Users, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";


function SideBareContent() {
    return (
        <div className="flex h-full flex-col">
            {/* entete de la barre laterale contenant le logo et le nom */}
           <div className="flex items-center gap-2 border-b border-zinc-200 p-4 dark:border-zinc-800 lg:h-16">
                 <HandPlatter  className="h-6 w-6 text-amber-500"/>
                 <span className="text-lg font-semibold">Gu<span className="text-amber-500">s</span>tia</span>
           </div>

           {/* Zone de navigation */}
           <ScrollArea className="flex-1 py-2">
               <nav className="grid gap-1 px-2">
                   <Button className="justify-start" variant={"ghost"} asChild>
                        <a href="#" className="flex items-center gap-2">
                             <Home className="h-4 w-4"/>
                             Tableau de bord
                        </a>
                   </Button>

                     <Button className="justify-start" variant={"ghost"} asChild>
                         <a href="#" className="flex items-center gap-2">
                              <MenuIcon className="h-4 w-4"/>
                                   Menu
                         </a>
                    </Button>
                    
                     <Button className="justify-start" variant={"ghost"} asChild>
                        <a href="#" className="flex items-center gap-2">
                             <ShoppingBag className="h-4 w-4"/>
                              Commandes
                        </a>
                   </Button>

                    <Button className="justify-start" variant={"ghost"} asChild>
                        <a href="#" className="flex items-center gap-2">
                             <Calendar className="h-4 w-4"/>
                              Réservation
                        </a>
                   </Button>

                  

                   <Button className="justify-start" variant={"ghost"} asChild>
                        <a href="#" className="flex items-center gap-2">
                             <Users className="h-4 w-4"/>
                              Personnel
                        </a>
                   </Button>

                   <Button className="justify-start" variant={"ghost"} asChild>
                        <a href="#" className="flex items-center gap-2">
                             <MessageSquare className="h-4 w-4"/>
                              Avis clients
                        </a>
                   </Button>

                   <Button className="justify-start" variant={"ghost"} asChild>
                        <a href="#" className="flex items-center gap-2">
                             <Settings className="h-4 w-4"/>
                              Paramètres
                        </a>
                   </Button>
               </nav>
           </ScrollArea>

           <div className="mt-auto border-t border-zinc-200 dark:border-zinc-800 p-4">
                <div className="flex items-center gap-3 rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
                       <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-90">
                            <ChefHat className="h-5 w-5 text-amber-600 dark:text-amber-400"/>
                       </div>
                       
                       <div>
                        <p className="text-sm font-medium">Nom de Admin</p>
                        <p className="text-xs text-muted-foreground">Admin</p>
                       </div>
                </div>
           </div>
        </div>
    )
}  

export default SideBareContent
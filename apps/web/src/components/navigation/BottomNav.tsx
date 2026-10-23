"use client";

import React from "react";
import Link from "next/link";
import { UtensilsCrossed, CalendarDays, Refrigerator, ShoppingCart, PieChart } from "lucide-react";

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-slate-200 md:hidden">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
        <Link href="/" className="flex flex-col items-center justify-center text-primary">
          <UtensilsCrossed className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-1">Hôm nay</span>
        </Link>
        <Link href="/meal-planner" className="flex flex-col items-center justify-center text-slate-500 hover:text-primary">
          <CalendarDays className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-1">Thực đơn</span>
        </Link>
        <Link href="/pantry" className="flex flex-col items-center justify-center text-slate-500 hover:text-primary">
          <Refrigerator className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-1">Tủ lạnh</span>
        </Link>
        <Link href="/shopping" className="flex flex-col items-center justify-center text-slate-500 hover:text-primary">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-1">Đi chợ</span>
        </Link>
        <Link href="/budget" className="flex flex-col items-center justify-center text-slate-500 hover:text-primary">
          <PieChart className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-1">Ngân sách</span>
        </Link>
      </div>
    </nav>
  );
}

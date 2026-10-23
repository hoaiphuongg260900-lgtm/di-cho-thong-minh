"use client";

import React from "react";
import Link from "next/link";
import { UtensilsCrossed, CalendarDays, Refrigerator, ShoppingCart, PieChart, ChefHat } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-slate-200 bg-white h-screen sticky top-0 px-4 py-6">
      <div className="flex items-center gap-3 px-2 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <ChefHat className="w-6 h-6" />
        </div>
        <div>
          <h1 className="font-bold text-slate-800 text-lg leading-tight">VibeHost</h1>
          <p className="text-xs text-slate-500">Trợ lý lên thực đơn</p>
        </div>
      </div>

      <nav className="space-y-1">
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium">
          <UtensilsCrossed className="w-5 h-5" />
          <span>Hôm nay ăn gì?</span>
        </Link>
        <Link href="/meal-planner" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
          <CalendarDays className="w-5 h-5" />
          <span>Lập Thực đơn Tuần</span>
        </Link>
        <Link href="/pantry" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
          <Refrigerator className="w-5 h-5" />
          <span>Quản lý Tủ lạnh</span>
        </Link>
        <Link href="/shopping" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
          <ShoppingCart className="w-5 h-5" />
          <span>Danh sách Đi chợ</span>
        </Link>
        <Link href="/budget" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
          <PieChart className="w-5 h-5" />
          <span>Sổ chi tiêu Ngân sách</span>
        </Link>
      </nav>

      <div className="mt-auto p-4 rounded-xl bg-orange-50 border border-orange-100">
        <div className="text-xs font-semibold text-orange-800 uppercase tracking-wide">Pantry Match</div>
        <p className="text-xs text-orange-600 mt-1">Đang có 12 nguyên liệu trong tủ lạnh. Hãy tìm món ăn hôm nay!</p>
      </div>
    </aside>
  );
}

import React from "react";
import { Sparkles, ShoppingBag, Plus, Calendar } from "lucide-react";

export default function MealPlannerPage() {
  const days = [
    { name: "Thứ Hai", date: "22/10", breakfast: "Bánh mì ốp la", lunch: "Cơm tấm sườn nướng", dinner: "Canh chua cá lóc" },
    { name: "Thứ Ba (Hôm nay)", date: "23/10", breakfast: "Yến mạch hoa quả", lunch: "Ức gà áp chảo sốt bơ tỏi", dinner: "Canh rong biển thịt bò" },
    { name: "Thứ Tư", date: "24/10", breakfast: "Phở gà", lunch: "Bò xào ớt chuông", dinner: "Cá thu sốt cà" },
    { name: "Thứ Năm", date: "25/10", breakfast: "Sữa chua granola", lunch: "Tôm rim thịt ba chỉ", dinner: "Canh bầu nấu tôm" },
    { name: "Thứ Sáu", date: "26/10", breakfast: "Bánh cuốn nấm", lunch: "Salad cá ngừ", dinner: "Gà kho sả ớt" },
    { name: "Thứ Bảy", date: "27/10", breakfast: "Bún chả cá", lunch: "Lẩu gà lá é gia đình", dinner: "Ăn nhẹ trái cây" },
    { name: "Chủ Nhật", date: "28/10", breakfast: "Pancake chuối", lunch: "Bò hầm tiêu xanh", dinner: "Salad tổng hợp" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            Lập Thực đơn Tuần
          </h1>
          <p className="text-sm text-slate-500">
            Kế hoạch bữa ăn cho 2 người • Chế độ: Eat Clean • 22/10 - 28/10
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50 transition-colors">
            <Sparkles className="w-4 h-4 text-orange-500" />
            Gợi ý lại bằng AI
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-xl shadow-sm hover:bg-primary-hover transition-colors">
            <ShoppingBag className="w-4 h-4" />
            Xuất sang danh sách đi chợ
          </button>
        </div>
      </div>

      {/* Week Grid / Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
        {days.map((d, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-slate-200 p-3 flex flex-col justify-between space-y-3">
            <div className="border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-800 block">{d.name}</span>
              <span className="text-[11px] text-slate-400">{d.date}</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-[10px] text-slate-400 font-medium block">Sáng</span>
                <span className="font-medium text-slate-700 line-clamp-1">{d.breakfast}</span>
              </div>
              <div className="bg-emerald-50/50 p-2 rounded-lg border border-emerald-100">
                <span className="text-[10px] text-emerald-600 font-medium block">Trưa</span>
                <span className="font-medium text-slate-800 line-clamp-1">{d.lunch}</span>
              </div>
              <div className="bg-orange-50/50 p-2 rounded-lg border border-orange-100">
                <span className="text-[10px] text-orange-600 font-medium block">Tối</span>
                <span className="font-medium text-slate-800 line-clamp-1">{d.dinner}</span>
              </div>
            </div>

            <button className="w-full py-1.5 border border-dashed border-slate-200 rounded-lg text-[11px] text-slate-400 hover:text-slate-600 hover:border-slate-300 flex items-center justify-center gap-1 transition-colors">
              <Plus className="w-3 h-3" /> Đổi món
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

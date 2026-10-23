import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Clock, 
  Flame, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Refrigerator, 
  ShoppingCart,
  TrendingUp 
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Header Greeting */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Hôm nay ăn gì?
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Thứ Ba, 23 Tháng 10
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Thực đơn gợi ý dựa trên 2 khẩu phần & chế độ Eat Clean
          </p>
        </div>

        {/* Quick Action Badges */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
            2 Người ăn
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-200">
            Eat Clean
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
            Hạn mức: 1.5M / tuần
          </span>
        </div>
      </div>

      {/* Main 3 Meals of the Day */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span>Bữa ăn trong ngày</span>
            <span className="text-xs font-normal text-slate-400">• Tổng 1,210 kcal</span>
          </h2>
          <button className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            Đổi thực đơn khác
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Breakfast */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
              <span>BỮA SÁNG (07:30)</span>
              <span className="text-emerald-600 font-medium">Đủ nguyên liệu</span>
            </div>
            <h3 className="font-bold text-slate-800 text-base">Yến mạch hoa quả hạt chia</h3>
            <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-orange-500" /> 320 kcal
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-500" /> 10 phút
              </span>
            </div>
          </div>

          {/* Lunch */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
              <span>BỮA TRƯA (12:00)</span>
              <span className="text-amber-600 font-medium flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> Thiếu 1 gia vị
              </span>
            </div>
            <h3 className="font-bold text-slate-800 text-base">Ức gà áp chảo sốt bơ tỏi</h3>
            <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-orange-500" /> 510 kcal
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-500" /> 25 phút
              </span>
            </div>
          </div>

          {/* Dinner */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
              <span>BỮA TỐI (19:00)</span>
              <span className="text-emerald-600 font-medium">Đủ nguyên liệu</span>
            </div>
            <h3 className="font-bold text-slate-800 text-base">Canh rong biển thịt bò băm</h3>
            <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-orange-500" /> 380 kcal
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-500" /> 20 phút
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid: Pantry Match & Shopping List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pantry Banner */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-6 relative overflow-hidden shadow-md">
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-100 flex items-center gap-1.5">
              <Refrigerator className="w-4 h-4" /> Nấu ăn từ tủ lạnh
            </span>
            <h2 className="text-xl font-bold mt-1">Bạn đang có đồ sắp hết hạn?</h2>
            <p className="text-xs text-emerald-100 mt-1 max-w-sm">
              Có 1 phần thịt bò và 2 củ cà rốt cần dùng ngay. Khám phá 3 món nấu được ngay để tránh lãng phí!
            </p>
            <Link 
              href="/pantry" 
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white text-emerald-700 text-xs font-bold rounded-xl shadow-sm hover:bg-emerald-50 transition-colors"
            >
              Xem món nấu được ngay <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Smart Shopping List Banner */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase text-slate-400 flex items-center gap-1.5">
                <ShoppingCart className="w-4 h-4 text-primary" /> Danh sách đi chợ
              </span>
              <span className="text-xs font-bold text-primary">7/14 món đã mua</span>
            </div>
            <h2 className="text-lg font-bold text-slate-800 mt-2">Chuyến đi chợ tuần này</h2>
            <div className="w-full bg-slate-100 rounded-full h-2 mt-3 overflow-hidden">
              <div className="bg-primary h-2 rounded-full w-1/2"></div>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Dự tính: <strong>420.000 đ</strong> • Đã phân chia theo gian hàng rau, thịt & gia vị.
            </p>
          </div>
          <Link 
            href="/shopping" 
            className="inline-flex items-center justify-between w-full mt-4 text-xs font-bold text-slate-700 hover:text-primary pt-3 border-t border-slate-100"
          >
            <span>Mở danh sách kiểm tra khi đi chợ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Budget Status Widget */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Ngân sách đi chợ Tháng 10</h4>
            <p className="text-xs text-slate-500">Đã tiêu 2.750.000 đ / 4.000.000 đ (An toàn)</p>
          </div>
        </div>
        <Link href="/budget" className="text-xs font-bold text-primary hover:underline">
          Chi tiết
        </Link>
      </div>
    </div>
  );
}

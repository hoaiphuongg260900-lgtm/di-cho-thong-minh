import React from "react";
import { PieChart, TrendingUp, AlertCircle, DollarSign, ArrowUpRight } from "lucide-react";

export default function BudgetPage() {
  const history = [
    { place: "Siêu thị WinMart+", date: "22/10/2026", amount: "385.000 đ", itemsCount: 6 },
    { place: "Chợ dân sinh Tân Bình", date: "19/10/2026", amount: "210.000 đ", itemsCount: 4 },
    { place: "Siêu thị Co.opmart", date: "15/10/2026", amount: "740.000 đ", itemsCount: 12 },
    { place: "Cửa hàng Rau sạch Bách Hóa", date: "11/10/2026", amount: "180.000 đ", itemsCount: 5 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <PieChart className="w-6 h-6 text-primary" />
          Thống kê & Quản lý Ngân sách
        </h1>
        <p className="text-sm text-slate-500">
          Theo dõi chi tiêu đi chợ và nhận cảnh báo khi sắp chạm trần ngân sách
        </p>
      </div>

      {/* Main Budget Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <span className="text-xs font-bold uppercase text-slate-400">Định mức Tháng 10/2026</span>
            <div className="text-3xl font-extrabold text-slate-900 mt-1">4.000.000 đ</div>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <span className="text-xs text-slate-400 block">Đã chi tiêu</span>
              <span className="text-lg font-bold text-slate-800">2.750.000 đ</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Còn lại</span>
              <span className="text-lg font-bold text-primary">1.250.000 đ</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <span className="text-slate-600">Tiến độ chi tiêu</span>
            <span className="text-slate-800">68.7%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
            <div className="bg-primary h-3 rounded-full w-[68.7%]"></div>
          </div>
          <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-primary" /> Bạn đang duy trì mức chi tiêu hợp lý cho tuần cuối tháng.
          </p>
        </div>
      </div>

      {/* Breakdown by Category */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs text-slate-400 font-medium">Thịt, Cá & Đạm tươi</span>
          <div className="text-xl font-bold text-slate-800 mt-1">1.500.000 đ</div>
          <span className="text-xs text-slate-500 font-medium mt-2 block">Chiếm 54.5% tổng chi</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs text-slate-400 font-medium">Rau củ quả tươi</span>
          <div className="text-xl font-bold text-slate-800 mt-1">680.000 đ</div>
          <span className="text-xs text-slate-500 font-medium mt-2 block">Chiếm 24.7% tổng chi</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs text-slate-400 font-medium">Gia vị, Dầu ăn & Đồ khô</span>
          <div className="text-xl font-bold text-slate-800 mt-1">570.000 đ</div>
          <span className="text-xs text-slate-500 font-medium mt-2 block">Chiếm 20.8% tổng chi</span>
        </div>
      </div>

      {/* Expense History */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase text-slate-400">Lịch sử đi chợ gần đây</h3>
          <span className="text-xs font-semibold text-primary hover:underline cursor-pointer">Xem tất cả</span>
        </div>

        <div className="divide-y divide-slate-100">
          {history.map((h, idx) => (
            <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div>
                <h4 className="text-sm font-bold text-slate-800">{h.place}</h4>
                <p className="text-xs text-slate-400">{h.date} • {h.itemsCount} mặt hàng</p>
              </div>
              <span className="text-sm font-bold text-slate-800">{h.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

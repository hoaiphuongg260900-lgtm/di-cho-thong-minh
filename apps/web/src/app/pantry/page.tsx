import React from "react";
import { Refrigerator, Plus, AlertTriangle, Sparkles, Camera } from "lucide-react";

export default function PantryPage() {
  const pantryItems = [
    { name: "Thịt bò thăn", qty: "300g", location: "Ngăn mát", expiry: "Hôm nay", status: "urgent" },
    { name: "Sữa tươi thanh trùng", qty: "1 hộp 900ml", location: "Ngăn cánh", expiry: "Còn 2 ngày", status: "warning" },
    { name: "Trứng gà Ba Huân", qty: "8 quả", location: "Ngăn trứng", expiry: "Còn 12 ngày", status: "fresh" },
    { name: "Cà chua Đà Lạt", qty: "4 quả", location: "Ngăn rau", expiry: "Còn 4 ngày", status: "fresh" },
    { name: "Cải thìa", qty: "500g", location: "Ngăn rau", expiry: "Còn 3 ngày", status: "fresh" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Refrigerator className="w-6 h-6 text-primary" />
            Quản lý Tủ lạnh & Hạn dùng
          </h1>
          <p className="text-sm text-slate-500">
            Theo dõi thời hạn thực phẩm để tránh lãng phí 20-30% chi phí
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50 transition-colors">
            <Camera className="w-4 h-4 text-slate-500" />
            Quét hóa đơn (OCR)
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-primary text-white text-xs font-semibold rounded-xl shadow-sm hover:bg-primary-hover transition-colors">
            <Plus className="w-4 h-4" />
            Thêm đồ vào tủ
          </button>
        </div>
      </div>

      {/* Pantry Match Callout */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-5 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-100">
            <Sparkles className="w-4 h-4" /> Tính năng: Nấu ăn từ tủ lạnh (Pantry Match)
          </div>
          <p className="text-sm font-semibold mt-1">
            Tìm món ăn tận dụng hết Thịt bò thăn & Cà chua sắp đến hạn
          </p>
        </div>
        <button className="px-4 py-2 bg-white text-orange-600 font-bold text-xs rounded-xl hover:bg-orange-50 transition-colors shrink-0">
          Gợi ý món nấu ngay
        </button>
      </div>

      {/* Expiry Alert List */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold uppercase text-slate-400">Danh mục thực phẩm trong tủ (5 món)</span>
          <span className="text-xs text-amber-600 font-semibold flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5" /> 2 món cần dùng gấp
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {pantryItems.map((item, idx) => (
            <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  item.status === 'urgent' ? 'bg-red-500' :
                  item.status === 'warning' ? 'bg-amber-500' : 'bg-emerald-500'
                }`} />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.location} • {item.qty}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  item.status === 'urgent' ? 'bg-red-50 text-red-700 border border-red-200' :
                  item.status === 'warning' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                  'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}>
                  {item.expiry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

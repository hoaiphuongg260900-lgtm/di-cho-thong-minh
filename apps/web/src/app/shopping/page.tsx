import React from "react";
import { ShoppingCart, Check, Plus, Camera, Share2 } from "lucide-react";

export default function ShoppingPage() {
  const categories = [
    {
      name: "Rau củ & Trái cây",
      items: [
        { name: "Cà chua Đà Lạt", qty: "500g", price: "15.000 đ", done: true },
        { name: "Bông cải xanh", qty: "1 cây", price: "25.000 đ", done: false },
        { name: "Hành lá & Ngò rí", qty: "1 mớ", price: "5.000 đ", done: false },
      ]
    },
    {
      name: "Thịt, Hải sản & Trứng",
      items: [
        { name: "Ức gà phi lê", qty: "600g", price: "65.000 đ", done: false },
        { name: "Trứng gà Ba Huân", qty: "1 vỉ (10 quả)", price: "32.000 đ", done: true },
      ]
    },
    {
      name: "Gia vị & Đồ khô",
      items: [
        { name: "Dầu ô liu Extra Virgin", qty: "1 chai", price: "110.000 đ", done: false },
        { name: "Hạt nêm nấm", qty: "1 gói", price: "22.000 đ", done: false },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-primary" />
            Danh sách Đi chợ Thông minh
          </h1>
          <p className="text-sm text-slate-500">
            Tự động gom nhóm theo các gian hàng trong siêu thị
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50 transition-colors">
            <Share2 className="w-4 h-4 text-slate-500" />
            Chia sẻ cho gia đình
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-xl shadow-sm hover:bg-primary-hover transition-colors">
            <Check className="w-4 h-4" />
            Hoàn tất đi chợ
          </button>
        </div>
      </div>

      {/* Progress & Summary Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <div className="flex items-center justify-between text-xs font-bold mb-2">
          <span className="text-slate-600">Tiến độ mua sắm</span>
          <span className="text-primary">2/7 món (28%)</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div className="bg-primary h-2.5 rounded-full w-[28%] transition-all"></div>
        </div>
        <div className="flex items-center justify-between text-xs text-slate-400 mt-3 pt-3 border-t border-slate-100">
          <span>Tổng dự kiến: <strong className="text-slate-700">274.000 đ</strong></span>
          <span className="flex items-center gap-1 text-slate-500">
            <Camera className="w-3.5 h-3.5" /> Có thể quét hóa đơn để tự động kiểm kê
          </span>
        </div>
      </div>

      {/* Categories & Checklist */}
      <div className="space-y-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-slate-50/70 px-5 py-3 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">{cat.name}</h3>
              <span className="text-xs text-slate-400">{cat.items.length} món</span>
            </div>

            <div className="divide-y divide-slate-100">
              {cat.items.map((item, itemIdx) => (
                <label 
                  key={itemIdx} 
                  className={`flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50/50 transition-colors ${
                    item.done ? 'bg-slate-50/30' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      defaultChecked={item.done}
                      className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer" 
                    />
                    <div>
                      <span className={`text-sm font-medium ${item.done ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                        {item.name}
                      </span>
                      <span className="text-xs text-slate-400 block">{item.qty}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-600">{item.price}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

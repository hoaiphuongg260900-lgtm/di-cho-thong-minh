# BẢN YÊU CẦU SẢN PHẨM (PRODUCT REQUIREMENT DOCUMENT - PRD)

## 1. Mô tả tổng quan (Overview)
* **Tên sản phẩm (dự kiến):** Trợ lý lên thực đơn & Đi chợ thông minh (Smart Meal & Shopping Assistant)
* **Nhánh đề tài:** Nhánh A — Công cụ cho người khác dùng
* **Nhóm chủ đề:** Cá nhân / Đời sống
* **Tóm tắt dự án:** Sản phẩm là một ứng dụng di động/web thông minh giúp người dùng lập kế hoạch bữa ăn, quản lý tủ lạnh, tự động hóa danh sách đi chợ và tối ưu hóa ngân sách chi tiêu hàng tuần/tháng.

---

## 2. Bài toán đặt ra (Problem Statement)
"Trợ lý lên thực đơn & Đi chợ thông minh" được phát triển nhằm giải quyết triệt để nỗi đau *"Hôm nay ăn gì?"* và áp lực quản lý bữa ăn hàng ngày của các gia đình cũng như người trẻ bận rộn. Hiện nay, việc thiếu kế hoạch chi tiết khiến người dùng không chỉ tốn nhiều thời gian, căng thẳng suy nghĩ thực đơn mà còn gây lãng phí 20–30% chi phí do mua thừa hoặc làm hỏng thực phẩm. Bằng việc ứng dụng công nghệ để cá nhân hóa thực đơn theo sở thích, dinh dưỡng và gợi ý món ăn dựa trên nguyên liệu sẵn có trong tủ lạnh, sản phẩm giúp tối ưu hóa việc sử dụng thực phẩm hiệu quả. Đồng thời, tính năng tự động tạo danh sách đi chợ theo định lượng và cảnh báo hạn sử dụng sẽ giúp người dùng quản lý ngân sách tối ưu, tiết kiệm đáng kể thời gian chuẩn bị. Qua đó, ứng dụng không chỉ mang lại giải pháp tiết kiệm tài chính mà còn nâng cao chất lượng sống và dinh dưỡng cho mỗi bữa ăn gia đình.

---

## 3. Đối tượng người dùng (Target Users)
Sản phẩm hướng đến đối tượng người dùng chính là **các gia đình, người nội trợ và nhân viên văn phòng bận rộn** – những người luôn chịu áp lực về thời gian và mong muốn tối ưu hóa việc quản lý bữa ăn hàng ngày. Đồng thời, ứng dụng mở rộng phục vụ **giới trẻ sống tự lập (sinh viên, người mới đi làm)** có nhu cầu đi chợ tiết kiệm, tránh lãng phí thực phẩm. Bên cạnh đó, đây cũng là công cụ đắc lực cho **nhóm người dùng theo đuổi các chế độ ăn đặc biệt** (Eat Clean, giảm cân, ăn chay, tập luyện) cần kiểm soát chính xác dinh dưỡng và calo. Bằng cách tập trung vào các nhóm khách hàng này, sản phẩm giải quyết triệt để bài toán cá nhân hóa thực đơn, tự động hóa danh sách mua sắm và kiểm soát ngân sách chi tiêu hiệu quả cho từng đối tượng.

---

## 4. Giá trị cốt lõi & Mục tiêu sản phẩm (Value Proposition & Goals)
* **Tiết kiệm thời gian:** Giảm đến 80% thời gian lên kế hoạch thực đơn và chuẩn bị danh sách đi chợ.
* **Tiết kiệm tài chính:** Giảm 20–30% lãng phí thực phẩm thông qua việc quản lý tủ lạnh và tính toán định lượng chính xác.
* **Tối ưu sức khỏe:** Đảm bảo chế độ dinh dưỡng đa dạng, cá nhân hóa theo từng nhu cầu thể trạng.

---

## 5. Tính năng chính (Key Features)

| STT | Tên tính năng | Mô tả chi tiết |
|---|---|---|
| 1 | **Gợi ý Thực đơn Cá nhân hóa** | Tự động lập thực đơn theo ngày/tuần dựa trên sở thích, ngân sách, số lượng thành viên và chế độ dinh dưỡng (Keto, Eat Clean, Chay...). |
| 2 | **Nấu ăn từ Tủ lạnh (Pantry Match)** | Nhập các nguyên liệu hiện có trong tủ lạnh, ứng dụng gợi ý các công thức nấu ăn phù hợp nhất để dùng hết đồ cũ. |
| 3 | **Danh sách Đi chợ Thông minh** | Tự động gom nhóm và định lượng nguyên liệu cần mua dựa trên thực đơn đã chọn; sắp xếp theo các gian hàng (rau, thịt, gia vị...). |
| 4 | **Quản lý Tủ lạnh & Cảnh báo Hạn dùng** | Theo dõi thời hạn sử dụng của thực phẩm đã mua và gửi cảnh báo nhắc nhở sử dụng trước khi hỏng. |
| 5 | **Thống kê & Quản lý Ngân sách** | Theo dõi chi tiêu đi chợ theo tuần/tháng, đưa ra cảnh báo khi sắp vượt định mức ngân sách đề ra. |

---

## 6. Định hướng Phát triển & Công nghệ (Tech Stack & Roadmap)
* **Frontend:** React Native / Flutter (Ứng dụng di động) hoặc ReactJS (Web App).
* **Backend:** Node.js / Python (FastAPI).
* **Công nghệ tích hợp:** 
  * Algorithmic recommendation Engine / AI Prompting để cá nhân hóa món ăn.
  * OCR / Quét hóa đơn (Tính năng nâng cao) để nhập nhanh danh sách thực phẩm vừa mua.
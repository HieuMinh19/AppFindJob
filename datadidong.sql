-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2019 at 06:05 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `datadidong`
--

-- --------------------------------------------------------

--
-- Table structure for table `chitietcongviec`
--

CREATE TABLE `chitietcongviec` (
  `MaChiTietCViec` int(10) NOT NULL,
  `YeuCauCViec` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `KinhNghiemCViec` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `TrinhDoCViec` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `MaCViec` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `chitietcongviec`
--

INSERT INTO `chitietcongviec` (`MaChiTietCViec`, `YeuCauCViec`, `KinhNghiemCViec`, `TrinhDoCViec`, `MaCViec`) VALUES
(1, 'Khả năng đọc tiếng anh', '2 năm ', 'tốt nghiệp Đại Học', 5),
(2, 'nhanh nhẹn, hoạt bát', 'không cần', 'Cao đẳng trở lên', 3),
(3, 'Giọng nói dễ hiểu', '6 tháng đi làm', 'tốt nghiệp phổ thông', 6),
(4, 'Thân thiệt với đồng nghiệp', 'Không Cần', 'tốt nghiệp phổ thông', 8),
(5, 'Thông Thạc và hiểu biết rõ về luật tài chính', 'Có công trình nghiên cứu', 'Thạc Sĩ hoặc Tiến Sĩ', 2),
(6, 'Có chứng chỉ TOEIC 500 điểm.', '2 năm đi làm.', 'Đại học trở lên', 1),
(7, 'Giọng Nói to rõ, xinh.', 'Từng làm việc trong nghề này.', 'Tốt Nghiệp Cao Đẳng', 9),
(8, 'Tiếp nhận thông tin đặt phòng của khách hàng trên các trang internet.\r\nLàm thủ tục nhận phòng và trả phòng tại khách sạn.\r\nLiên lạc với các bên dịch vụ.', 'Không Cần Có Kinh Nghiệm', 'Trung Cấp trở lên', 11),
(9, 'Có Bằng lái xe.\r\nCó Điện Thoại HĐH Android hoặc IOS', 'Từng đi giao nhận hàng', 'Tốt Nghiệp phổ thông trở lên', 12),
(10, 'Cần đi làm đúng thời gian, trễ sẽ làm bảng kiểm điêm.\r\nCần có đồng phục theo công ty, nhân viên tự may đồng phục.\r\nLàm việc cần sự tập trung cao.', 'Đã từng làm việc tại những nơi thế này.\r\n', 'Tốt nghiệp phổ thông', 14),
(11, 'Có chuyên ngành Kế Toán.\r\nCó trình độ và có thể giao tiếp với khách hang.\r\n', 'Không Cần Kinh nghiêm, Đi làm sẽ được hướng dẫn cụ thể', 'Tốt Nghiệp Phổ Thông, ', 15),
(12, 'Là công ty đầu tiên cung cấp gói dịch vụ tư vấn, thiết kế và thi công hoàn thiện một cách chuyên nghiệp, với lộ trình khoa học, rõ ràng và mức giá cạnh tranh', 'Tự tin với tiến độ thi công nhanh nhất, khách hàng của chúng tôi luôn luôn bất ngờ vì thời gian hoàn thiện vượt trên sự mong đợi.\r\n', 'Tốt Nghiệp Cao đẳng hoặc cao hơn ', 16),
(13, 'Chuẩn bị cơ sở vật chất đón khách.\r\nPhục vụ khách sử dụng các dịch vụ của cơ sở kinh doanh.\r\nThực hiện các công việc khác theo yêu cầu của cấp trên', 'Nam, Nữ: Từ 16 tuổi trở lên.\r\nNgoại hình ưa nhìn, có duyên, hoạt bát nhanh nhẹn, năng động, nhiệt tình, có tinh thần trách nhiệm cao trong công việc, hòa đồng, trung thưc,\r\n Ưu tiên ứng viên có kinh nghiệm làm việc tại khách sạn, nhà hàng.', 'Tốt Nghiệp Phổ Thông,', 24),
(14, 'Biết đôi chút về kĩ thuật , máy móc \r\nTiếng Anh khá vì phải trao đổi với đối tác mỗi ngày , biết thêm Tiếng Hoa càng tốt ạ \r\nChịu làm việc vừa ở văn phòng và đi ra ngoài công tác\r\nSiêng năng , chịu có và có thái độ làm việc tốt \r\n', 'Sẽ được training tất cả với chuyên gia nước ngoài nên các bạn không cần phải lo lắng\r\nLàm việc trong môi trường chuyên nghiệp nhưng rất thoải mái , đồng nghiệp rất vui vẻ, được trao dồi khả năng ngoại ngữ , được đi công tác nước ngoài thường xuyên \r\nSếp r', 'Tốt Nghiệp Phổ Thông, hoặc cao hơn', 17),
(15, 'Ít nhất 1 năm kinh nghiệm về lĩnh vực liên quan (đạo diễn, quay phim hoặc biên tập clip).\r\nKiến thức tốt về nhiếp ảnh, hiệu ứng hình ảnh và âm thanh.\r\nSử dụng thành thạo các công cụ chỉnh sửa video và âm thanh cơ bản: Adobe Premier, Audition và After Effe', 'Biên tập, quay clip, dựng clip, xử lý video, xử lý hình ảnh\r\nTham gia lập kế hoạch công việc và triển khai thực hiện theo đúng yêu cầu về thời gian và chất lượng các sự kiện, hoạt động của công ty.\r\nThực hiện tốt các công việc khác khi được giao phó, thực', 'tốt nghiệp đại học chuyên ngành công nghệ thông tin', 18),
(16, 'Biết đôi chút về kĩ thuật , máy móc \r\nTiếng Anh khá vì phải trao đổi với đối tác mỗi ngày , biết thêm Tiếng Hoa càng tốt ạ \r\nChịu làm việc vừa ở văn phòng và đi ra ngoài công tác\r\nSiêng năng , chịu có và có thái độ làm việc tốt ', 'Phụ trách liên hệ với đối tác người Ý ( Italy ) , hiểu biết đôi chút về kĩ thuật , công việc có thể ở văn phòng và đi theo sếp ra ngoài công tác ( đi nước ngoài thường xuyên ) \r\nCó thể hỗ trợ sửa chữa máy móc khi sếp yêu cầu \r\nBáo giá , đặt hàng linh kiện', 'Tốt Nghiệp Phổ Thông, ', 19),
(17, 'Ngoại hình ưa nhìn, có duyên, hoạt bát nhanh nhẹn, năng động, nhiệt tình, có tinh thần trách nhiệm cao trong công việc, hòa đồng, trung thưc,\r\n- Ưu tiên ứng viên có kinh nghiệm làm việc tại khách sạn, nhà hàng.', '1. Chuẩn bị cơ sở vật chất đón khách.\r\n2. Phục vụ khách sử dụng các dịch vụ của cơ sở kinh doanh.\r\n3. Thực hiện các công việc khác theo yêu cầu của cấp trên', 'Là Sinh viên đang có nhu cầu làm thêm, tốt nghiệp phổ thông', 20),
(18, 'Biết đôi chút về kĩ thuật , máy móc \r\nTiếng Anh khá vì phải trao đổi với đối tác mỗi ngày , biết thêm Tiếng Hoa càng tốt ạ \r\nChịu làm việc vừa ở văn phòng và đi ra ngoài công tác\r\nSiêng năng , chịu có và có thái độ làm việc tốt ', 'Phụ trách liên hệ với đối tác người Ý ( Italy ) , hiểu biết đôi chút về kĩ thuật , công việc có thể ở văn phòng và đi theo sếp ra ngoài công tác ( đi nước ngoài thường xuyên ) \r\nCó thể hỗ trợ sửa chữa máy móc khi sếp yêu cầu \r\nBáo giá , đặt hàng linh kiện', 'Tốt Nghiệp Phổ Thông, ', 21),
(19, 'Ngoại hình ưa nhìn, có duyên, hoạt bát nhanh nhẹn, năng động, nhiệt tình, có tinh thần trách nhiệm cao trong công việc, hòa đồng, trung thưc,\r\n- Ưu tiên ứng viên có kinh nghiệm làm việc tại khách sạn, nhà hàng.', '1. Chuẩn bị cơ sở vật chất đón khách.\r\n2. Phục vụ khách sử dụng các dịch vụ của cơ sở kinh doanh.\r\n3. Thực hiện các công việc khác theo yêu cầu của cấp trên', 'Là Sinh viên đang có nhu cầu làm thêm, tốt nghiệp phổ thông', 22),
(20, 'Biết đôi chút về kĩ thuật , máy móc \r\nTiếng Anh khá vì phải trao đổi với đối tác mỗi ngày , biết thêm Tiếng Hoa càng tốt ạ \r\nChịu làm việc vừa ở văn phòng và đi ra ngoài công tác\r\nSiêng năng , chịu có và có thái độ làm việc tốt ', 'Phụ trách liên hệ với đối tác người Ý ( Italy ) , hiểu biết đôi chút về kĩ thuật , công việc có thể ở văn phòng và đi theo sếp ra ngoài công tác ( đi nước ngoài thường xuyên ) \r\nCó thể hỗ trợ sửa chữa máy móc khi sếp yêu cầu \r\nBáo giá , đặt hàng linh kiện', 'Tốt Nghiệp Phổ Thông, ', 23),
(21, 'Ngoại hình ưa nhìn, có duyên, hoạt bát nhanh nhẹn, năng động, nhiệt tình, có tinh thần trách nhiệm cao trong công việc, hòa đồng, trung thưc,\r\n- Ưu tiên ứng viên có kinh nghiệm làm việc tại khách sạn, nhà hàng.', '1. Chuẩn bị cơ sở vật chất đón khách.\r\n2. Phục vụ khách sử dụng các dịch vụ của cơ sở kinh doanh.\r\n3. Thực hiện các công việc khác theo yêu cầu của cấp trên', 'Là Sinh viên đang có nhu cầu làm thêm, tốt nghiệp phổ thông', 25);

-- --------------------------------------------------------

--
-- Table structure for table `chitietnguoixinviec`
--

CREATE TABLE `chitietnguoixinviec` (
  `MaCTNXViec` int(10) NOT NULL,
  `MaUser` int(10) NOT NULL,
  `MaCViec` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `chitietnguoixinviec`
--

INSERT INTO `chitietnguoixinviec` (`MaCTNXViec`, `MaUser`, `MaCViec`) VALUES
(1, 1, 9),
(2, 7, 9),
(3, 1, 14),
(4, 1, 24),
(5, 3, 6),
(6, 8, 15),
(7, 8, 24),
(8, 5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `congty`
--

CREATE TABLE `congty` (
  `MaCTy` int(10) NOT NULL,
  `TenCTy` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `DiaChiCTy` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `EmailCTy` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `DienThoaiCTy` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `MaTinh` int(10) NOT NULL,
  `MaUser` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `congty`
--

INSERT INTO `congty` (`MaCTy`, `TenCTy`, `DiaChiCTy`, `EmailCTy`, `DienThoaiCTy`, `MaTinh`, `MaUser`) VALUES
(1, 'Công ty cổ phần viễn thông FPT', 'tp Hồ Chí Minh', 'fpt@fpt.com', '123123123', 1, 1),
(2, 'CÔNG TY TNHH INTEL PRODUCTS VIỆT NAM', 'nha trang', 'intel@intel.com', '145145145', 2, 1),
(3, 'Khách Sạn Moonlight Bay', 'Phú Quốc', 'moonlightbay@moonlightbay.com', '123456123', 16, 3),
(4, 'Công ty CPN Lazada Việt Nam', 'phường Phương Đông, quận Phương Tây', 'lazadaangiang@lazada.com', '2525252512', 2, 3),
(5, 'SIÊU THỊ COOPMART', 'Quận Tân Phú', 'tanphucoopmart@gmail.com', '123123456', 29, 1),
(6, 'Công Ty Cổ Phần Trang Trí Nội Thất Hòa Phong (HPDECO)', 'Phòng 1901, Tòa nhà Saigon Trade Center, số 37 Tôn Đức Thắng - Phường Bến Nghé - Quận 1', 'HoaPhong@gmai.com', '1451251256', 29, 2),
(7, 'Công Ty Cổ Phần Coca-Cola Việt Nam', ' Số 68 Ngõ 116 Nhân Hòa, Nhân Chính, Thanh Xuân', 'thanhxuan@gmai.com', '147147147', 1, 3),
(8, 'CÔNG TY TNHH VINA FOODS KYOEI', 'Lô U1, đường 7B, KCN Hòa Khánh mở rộng, phường Hòa Khánh Bắc, quận Liên Chiểu,', 'FOODSKYOEI@gmai.com', '1451251123', 16, 3),
(9, 'Công Ty Quản Lý Nợ Và Khai Thác Tài Sản', 'Phòng 1901, Tòa nhà Saigon Trade Center, số 37 Tôn Đức Thắng', 'HoaPhongsan@gmai.com', '145121235', 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `congviec`
--

CREATE TABLE `congviec` (
  `MaCViec` int(10) NOT NULL,
  `TenCViec` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `LuongCViec` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `MaCTy` int(10) NOT NULL,
  `MaTinh` int(10) NOT NULL,
  `AnhCongViec` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TinhChatCViec` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `congviec`
--

INSERT INTO `congviec` (`MaCViec`, `TenCViec`, `LuongCViec`, `MaCTy`, `MaTinh`, `AnhCongViec`, `TinhChatCViec`) VALUES
(1, 'Công Ty Điện Tử FPT', '8.300.000đ - 10.700.000đ/tháng', 1, 1, '../assets/anhcongviec1.png', 1),
(2, 'Công Ty Tài Chính VIETCOMBANK', '2.100.000đ - 3.000.000đ/tháng', 2, 1, '/assets/anhcongviec2.png', 0),
(3, 'Nhân Viên Kế Toán', '6.000.000đ - 7.500.000đ/tháng', 1, 2, '/assets/anhcongviec3.png', 0),
(4, 'Nhân Viên Bảo Vệ', '8.000.000đ - 9.000.000đ/tháng', 2, 2, '/assets/anhcongviec4.png', 1),
(5, 'kiểm Kê sản phẩm', '7.000.000đ - 9.300.000đ/tháng', 2, 1, '/assets/anhcongviec5.png', 1),
(6, 'Thiết Kế Giao Diện Web', '5.000.000 - 7.000.000 VNĐ một tháng', 1, 2, '/assets/anhcongviec6.png', 1),
(7, 'Xây Dựng Công Trình', '18.000.000 - 22.000.000 VNĐ một tháng', 1, 2, '/assets/anhcongviec7.png', 1),
(8, 'Rửa Sửa Xe Máy', '6.000.000 - 7.000.000 VNĐ một tháng', 1, 29, '/assets/anhcongviec8.png', 0),
(9, 'Bán Hàng Tại siêu Thị', '5.600.000 - 7.200.000 VNĐ một tháng', 1, 29, '/assets/anhcongviec9.png', 0),
(10, 'con cho con fpt', '5.700.000 - 7.100.000 VNĐ một tháng', 2, 29, 'êdsa', 0),
(11, 'Lễ Tân', '5.000.000 - 7.000.000 VNĐ một tháng', 3, 16, NULL, 1),
(12, 'Đối tác Giao Nhận tại Bắc An Giang', '8.000.000đ - 10.000.000đ/tháng', 4, 2, NULL, 1),
(13, 'Công Tác Viên Giao Nhận - Lắp Đặt Điện Máy', '10.000.000đ - 13.000.000đ/tháng', 5, 29, NULL, 1),
(14, 'Nhân viên đóng gói, giữ quầy đồ siêu thị Coopmart', 'Ca 4 Tiêng (Lương: 3.900.000đ/tháng) - Ca 6 Tiêng (Lương: 6.700.000đ/tháng) -Ca 8 Tiêng (Lương: 9.500.000đ/tháng)\r\n                                                                                                                        ', 5, 29, NULL, 0),
(15, 'Nhân Viên Nhập Liệu Kho - Việc Làm tiêu biểu', '7.500.000đ - 9.000.000đ/tháng', 5, 29, NULL, 0),
(16, 'Chuyên Viên Telesale Ngành Nội Thất', 'Mức Lương 10 – 15 Triệu + Hoa Hồng', 6, 1, NULL, 1),
(17, 'Nhân Viên Tổng Đài Nhắc Phí', '5.500.000đ - 7.100.000đ/tháng', 5, 16, NULL, 1),
(18, 'Trợ Lý Chăm Sóc Khách Hàng', '7.200.000-10.100.000 triệu', 6, 29, NULL, 1),
(19, 'Xử Lý Video Editer, Quay Dựng, Hậu Kỳ', '7.000.000đ - 9.500.000đ/tháng', 6, 29, NULL, 1),
(20, 'Nhân Viên Phục Vụ Nhà Hàng - Part Time', '3.500.000đ - 4.000.000đ/tháng', 5, 16, NULL, 0),
(21, 'Nhân Viên Tổng Đài Nhắc Phí', '5.500.000đ - 7.100.000đ/tháng', 5, 29, NULL, 1),
(22, 'Trợ Lý Chăm Sóc Khách Hàng', '7.200.000-10.100.000 triệu', 6, 16, NULL, 1),
(23, 'Xử Lý Video Editer, Quay Dựng, Hậu Kỳ', '7.000.000đ - 9.500.000đ/tháng', 6, 29, NULL, 1),
(24, 'Nhân Viên Phục Vụ Nhà Hàng - Part Time', '3.500.000đ - 4.000.000đ/tháng', 5, 16, NULL, 0),
(25, 'Xử Lý Video Editer, Quay Dựng, Hậu Kỳ', '7.000.000đ - 9.500.000đ/tháng', 6, 29, NULL, 1),
(26, 'Nhân Viên Phục Vụ Nhà Hàng - Part Time', '3.500.000đ - 4.000.000đ/tháng', 5, 29, NULL, 0),
(27, 'Nhân Viên Phục Vụ Trà Sữa', '20 ngàn 1 giờ hoặc 4.000.000đ/tháng', 6, 29, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `nguoixinviec`
--

CREATE TABLE `nguoixinviec` (
  `MaNXinViec` int(10) NOT NULL,
  `TenNXinViec` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `MaTrinhDo` int(11) DEFAULT NULL,
  `EmailNXinViec` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `MaCViec` int(10) NOT NULL,
  `MaTinh` int(10) NOT NULL,
  `SoDienThoai` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DiaChiNXViec` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `NgaySinh` datetime DEFAULT NULL,
  `MaUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `nguoixinviec`
--

INSERT INTO `nguoixinviec` (`MaNXinViec`, `TenNXinViec`, `MaTrinhDo`, `EmailNXinViec`, `MaCViec`, `MaTinh`, `SoDienThoai`, `DiaChiNXViec`, `NgaySinh`, `MaUser`) VALUES
(1, 'nguyen phuc Duc', 4, 'nguyenphucduc@gmail.com', 0, 29, '0335280715', '73/5, duong so 7, khu pho 3, Linh Trung, Thu Duc', '2019-01-11 00:00:00', 1),
(2, 'nguyen duc', 1, 'nguyenduc@gmail.com', 0, 29, '0335280715', '73/5, so 7, thu duc', '2019-01-11 00:00:00', 0),
(3, 'd', 1, 'd', 0, 29, '', 'd', '2018-05-15 00:00:00', 0),
(4, 'a', 1, '', 0, 29, '', '', '2018-05-15 00:00:00', 0),
(5, 'a', 1, 'a', 0, 29, '53', 'a', '2018-05-15 00:00:00', 0),
(6, 'Hanoi', 1, 'b', 0, 29, 'd', 'c', '2018-05-15 00:00:00', 0),
(7, 'hai', 5, 'hai', 0, 13, '123123123', 'hai', '0000-00-00 00:00:00', 2),
(8, 'Le Minh Hieu', 1, 'Leminhhieu@gmail.com', 0, 29, '123456789', 'duc hoa', '2018-05-16 00:00:00', 3),
(9, 'abc', 3, 'abc', 0, 15, 'abc', 'abc', '2018-05-15 00:00:00', 7),
(10, 'Tran Ngoc Hai', 1, 'tranngochai@gmail.com', 0, 16, '0331234569', 'quan 9', '2018-01-17 00:00:00', 8);

-- --------------------------------------------------------

--
-- Table structure for table `tinh`
--

CREATE TABLE `tinh` (
  `MaTinh` int(11) NOT NULL,
  `TenTinh` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tinh`
--

INSERT INTO `tinh` (`MaTinh`, `TenTinh`) VALUES
(1, 'Hà Nội'),
(2, 'An Giang'),
(3, 'Bà Rịa – Vũng Tàu'),
(4, 'Bạc Liêu'),
(5, 'Bắc Kạn'),
(6, 'Bắc Giang'),
(7, 'Bắc Ninh'),
(8, 'Bến Tre'),
(9, 'Bình Dương'),
(10, 'Bình Định'),
(11, 'Bình Phước'),
(12, 'Bình Thuận'),
(13, 'Cà Mau'),
(14, 'Cao Bằng'),
(15, 'Cần Thơ'),
(16, 'Đà Nẵng'),
(17, 'Đắk Lắk'),
(18, 'Đắk Nông'),
(19, 'Điện Biên'),
(20, 'Đồng Nai'),
(21, 'Đồng Tháp'),
(22, 'Gia Lai'),
(23, 'Hà Giang'),
(24, 'Hà Nam'),
(25, 'Hà Tĩnh'),
(26, 'Hải Dương'),
(27, 'Hải Phòng'),
(28, 'Hòa Bình'),
(29, 'Hồ Chí Minh'),
(30, 'Hậu Giang'),
(31, 'Hưng Yên'),
(32, 'Khánh Hòa'),
(33, 'Kiên Giang'),
(34, 'Kon Tum'),
(35, 'Lai Châu'),
(36, 'Lào Cai'),
(37, 'Lạng Sơn'),
(38, 'Lâm Đồng'),
(39, 'Long An'),
(40, 'Nam Định'),
(41, 'Nghệ An'),
(42, 'Ninh Bình'),
(43, 'Ninh Thuận'),
(44, 'Phú Thọ'),
(45, 'Phú Yên'),
(46, 'Quảng Bình'),
(47, 'Quảng Nam'),
(48, 'Quảng Ngãi'),
(49, 'Quảng Ninh'),
(50, 'Quảng Trị'),
(51, 'Sóc Trăng'),
(52, 'Sơn La'),
(53, 'Tây Ninh'),
(54, 'Thái Bình'),
(55, 'Thái Nguyên'),
(56, 'Thanh Hóa'),
(57, 'Thừa Thiên – Huế'),
(58, 'Tiền Giang'),
(59, 'Trà Vinh'),
(60, 'Tuyên Quang'),
(61, 'Vĩnh Long'),
(62, 'Vĩnh Phúc'),
(63, 'Yên Bái');

-- --------------------------------------------------------

--
-- Table structure for table `trinhdo`
--

CREATE TABLE `trinhdo` (
  `MaTrinhDo` int(11) NOT NULL,
  `tenTrinhDo` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `trinhdo`
--

INSERT INTO `trinhdo` (`MaTrinhDo`, `tenTrinhDo`) VALUES
(1, 'phổ thông'),
(2, 'trung cấp'),
(3, 'cao đăng'),
(4, 'cử nhân'),
(5, 'kĩ sư'),
(6, 'thạc sĩ'),
(7, 'tiến sĩ');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `MaUser` int(10) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`MaUser`, `username`, `password`) VALUES
(1, 'duc', '202cb962ac59075b964b07152d234b70'),
(2, 'duc123', '202cb962ac59075b964b07152d234b70'),
(3, 'hieu', '202cb962ac59075b964b07152d234b70'),
(4, 'hieu123', '202cb962ac59075b964b07152d234b70'),
(5, 'duc1', '202cb962ac59075b964b07152d234b70'),
(6, 'duc2', '202cb962ac59075b964b07152d234b70'),
(7, 'hai', '202cb962ac59075b964b07152d234b70'),
(8, 'hai1', '202cb962ac59075b964b07152d234b70');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chitietcongviec`
--
ALTER TABLE `chitietcongviec`
  ADD PRIMARY KEY (`MaChiTietCViec`);

--
-- Indexes for table `chitietnguoixinviec`
--
ALTER TABLE `chitietnguoixinviec`
  ADD PRIMARY KEY (`MaCTNXViec`);

--
-- Indexes for table `congty`
--
ALTER TABLE `congty`
  ADD PRIMARY KEY (`MaCTy`);

--
-- Indexes for table `congviec`
--
ALTER TABLE `congviec`
  ADD PRIMARY KEY (`MaCViec`);

--
-- Indexes for table `nguoixinviec`
--
ALTER TABLE `nguoixinviec`
  ADD PRIMARY KEY (`MaNXinViec`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`MaUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chitietcongviec`
--
ALTER TABLE `chitietcongviec`
  MODIFY `MaChiTietCViec` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `chitietnguoixinviec`
--
ALTER TABLE `chitietnguoixinviec`
  MODIFY `MaCTNXViec` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `congty`
--
ALTER TABLE `congty`
  MODIFY `MaCTy` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `congviec`
--
ALTER TABLE `congviec`
  MODIFY `MaCViec` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `nguoixinviec`
--
ALTER TABLE `nguoixinviec`
  MODIFY `MaNXinViec` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `MaUser` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

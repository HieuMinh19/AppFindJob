-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 14, 2019 at 09:00 AM
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
(9, 'Có Bằng lái xe.\r\nCó Điện Thoại HĐH Android hoặc IOS', 'Từng đi giao nhận hàng', 'Tốt Nghiệp phổ thông trở lên', 12);

-- --------------------------------------------------------

--
-- Table structure for table `chitietnguoixinviec`
--

CREATE TABLE `chitietnguoixinviec` (
  `MaCTNXViec` int(10) NOT NULL,
  `MaUser` int(10) NOT NULL,
  `MaCViec` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
(1, 'FPT', 'tp Hồ Chí Minh', 'fpt@fpt.com', '123123123', 1, 1),
(2, 'intel', 'nha trang', 'intel@intel.com', '145145145', 2, 1),
(3, 'Khách Sạn Moonlight Bay', 'Phú Quốc', 'moonlightbay@moonlightbay.com', '123456123', 16, 3),
(4, 'Công ty CPN Lazada Việt Nam', 'phường Phương Đông, quận Phương Tây', 'lazadaangiang@lazada.com', '2525252512', 2, 3);

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
(1, 'Công Ty Điện Tử FPT', '12 triệu', 1, 1, '../assets/anhcongviec1.png', 1),
(2, 'Công Ty Tài Chính VIETCOMBANK', '2 triệu', 2, 1, '/assets/anhcongviec2.png', 0),
(3, 'Nhân Viên Kế Toán', '7 Triệu', 1, 2, '/assets/anhcongviec3.png', 0),
(4, 'Nhân Viên Bảo Vệ', '6 Triệu', 2, 2, '/assets/anhcongviec4.png', 1),
(5, 'kiểm Kê sản phẩm', '8 Triệu', 2, 1, '/assets/anhcongviec5.png', 1),
(6, 'Thiết Kế Giao Diện Web', '15 Triệu', 1, 2, '/assets/anhcongviec6.png', 1),
(7, 'Xây Dựng Công Trình', '18 triệu', 1, 2, '/assets/anhcongviec7.png', 1),
(8, 'Rửa Sửa Xe Máy', '7 Triệu', 1, 29, '/assets/anhcongviec8.png', 0),
(9, 'Bán Hàng Tại siêu Thị', '8 Triệu', 1, 29, '/assets/anhcongviec9.png', 0),
(10, 'con cho con fpt', '3 năm', 2, 29, 'êdsa', 0),
(11, 'Lễ Tân', '5.000.000 - 7.000.000 VNĐ một tháng', 3, 16, NULL, 1),
(12, 'Đối tác Giao Nhận tại Bắc An Giang', '8.000.000đ - 10.000.000đ/tháng', 4, 2, NULL, 1);

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
(1, 'nguyen duc', 5, 'nguyenduc@gmail.com', 0, 32, '0335280715', '73/5, so 7, thu duc', '2019-01-11 00:00:00', 0),
(2, 'nguyen duc', 1, 'nguyenduc@gmail.com', 0, 29, '0335280715', '73/5, so 7, thu duc', '2019-01-11 00:00:00', 0),
(3, 'd', 1, 'd', 0, 29, '', 'd', '2018-05-15 00:00:00', 0),
(4, 'a', 1, '', 0, 29, '', '', '2018-05-15 00:00:00', 0),
(5, 'a', 1, 'a', 0, 29, '53', 'a', '2018-05-15 00:00:00', 0),
(6, 'a', 1, 'b', 0, 29, 'd', 'c', '2018-05-15 00:00:00', 0),
(7, 'sa', 6, 'dÂ´', 0, 15, 'dsa', 'dsa', '2018-05-24 00:00:00', 0),
(8, 'a', 2, 'dÂ´', 0, 16, 's', 's', '2018-05-16 00:00:00', 0);

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
(6, 'duc2', '202cb962ac59075b964b07152d234b70');

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
  MODIFY `MaChiTietCViec` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `chitietnguoixinviec`
--
ALTER TABLE `chitietnguoixinviec`
  MODIFY `MaCTNXViec` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `congty`
--
ALTER TABLE `congty`
  MODIFY `MaCTy` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `congviec`
--
ALTER TABLE `congviec`
  MODIFY `MaCViec` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `nguoixinviec`
--
ALTER TABLE `nguoixinviec`
  MODIFY `MaNXinViec` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `MaUser` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

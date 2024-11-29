import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import * as OrderService from '../../services/OrderService';
import { orderContant } from '../../contant';
import { convertPrice } from '../../utils';
import Loading from '../../components/LoadingComponent/Loading';
import { WrapperAllPrice, WrapperContentInfo, WrapperHeaderUser, WrapperInfoUser, WrapperItem, WrapperItemLabel, WrapperLabel, WrapperNameProduct, WrapperProduct, WrapperStyleContent } from './style';

const DetailsOrderPage = () => {
  const params = useParams();
  const location = useLocation();
  const { state } = location;
  const { id } = params;

  const fetchDetailsOrder = async () => {
    const res = await OrderService.getDetailsOrder(id, state?.token);
    return res.data;
  };

  const queryOrder = useQuery({ queryKey: ['orders-details'], queryFn: fetchDetailsOrder }, { enabled: id });
  const { isLoading, data } = queryOrder;

  const priceMemo = useMemo(() => {
    return data?.orderItems?.reduce((total, cur) => total + (cur.price * cur.amount), 0);
  }, [data]);

  return (
    <Loading isLoading={isLoading}>
      <div style={{ width: '100%', height: '100vh', background: '#f5f5fa', padding: '20px' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <h4 style={{ textAlign: 'center' }}>Chi tiết đơn hàng</h4>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
            {/* Địa chỉ người nhận */}
            <WrapperInfoUser style={{ flex: 1 }}>
              <WrapperLabel>Địa chỉ người nhận</WrapperLabel>
              <WrapperContentInfo>
                <div className='name-info'>{data?.shippingAddress?.fullName}</div>
                <div className='address-info'>
                  <span>Địa chỉ: </span>{`${data?.shippingAddress?.address} ${data?.shippingAddress?.city}`}
                </div>
                <div className='phone-info'>
                  <span>Điện thoại: </span>{data?.shippingAddress?.phone}
                </div>
              </WrapperContentInfo>
            </WrapperInfoUser>

            {/* Hình thức giao hàng */}
            <WrapperInfoUser style={{ flex: 1 }}>
              <WrapperLabel>Hình thức giao hàng</WrapperLabel>
              <WrapperContentInfo>
                <div className='delivery-info'>
                  <span className='name-delivery'>FAST </span>Giao hàng tiết kiệm
                </div>
                <div className='delivery-fee'>
                  <span>Phí giao hàng: </span>{data?.shippingPrice}
                </div>
              </WrapperContentInfo>
            </WrapperInfoUser>

            {/* Hình thức thanh toán */}
            <WrapperInfoUser style={{ flex: 1 }}>
              <WrapperLabel>Hình thức thanh toán</WrapperLabel>
              <WrapperContentInfo>
                <div className='payment-info'>{orderContant.payment[data?.paymentMethod]}</div>
                <div className='status-payment'>
                  {data?.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}
                </div>
              </WrapperContentInfo>
            </WrapperInfoUser>
          </div>

          <WrapperStyleContent>
            {/* Bảng thông tin sản phẩm */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <div style={{ width: '60%' }}>Sản phẩm</div>
                <div style={{ width: '15%' }}>Giá</div>
                <div style={{ width: '10%' }}>Số lượng</div>
                <div style={{ width: '15%' }}>Giảm giá</div>
              </div>
              {data?.orderItems?.map((order) => (
                <WrapperProduct key={order.id}>
                  <WrapperNameProduct>
                    <img
                      src={order?.image}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                        border: '1px solid rgb(238, 238, 238)',
                        padding: '2px'
                      }}
                      alt={order?.name}
                    />
                    <div
                      style={{
                        width: 260,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        marginLeft: '10px',
                        height: '70px',
                      }}
                    >
                      {order?.name || 'Điện thoại'}
                    </div>
                  </WrapperNameProduct>
                  <div style={{ width: '15%' }}>{convertPrice(order?.price)}</div>
                  <div style={{ width: '10%' }}>{order?.amount}</div>
                  <div style={{ width: '15%' }}>
                    {order?.discount ? convertPrice(priceMemo * order?.discount / 100) : '0 VND'}
                  </div>
                </WrapperProduct>
              ))}
            </div>

            {/* Thông tin giá trị tổng cộng */}
            <WrapperAllPrice>
              <WrapperItemLabel>Tạm tính</WrapperItemLabel>
              <WrapperItem>{convertPrice(priceMemo)}</WrapperItem>
            </WrapperAllPrice>
            <WrapperAllPrice>
              <WrapperItemLabel>Phí vận chuyển</WrapperItemLabel>
              <WrapperItem>{convertPrice(data?.shippingPrice)}</WrapperItem>
            </WrapperAllPrice>
            <WrapperAllPrice>
              <WrapperItemLabel>Tổng cộng</WrapperItemLabel>
              <WrapperItem>{convertPrice(data?.totalPrice)}</WrapperItem>
            </WrapperAllPrice>
          </WrapperStyleContent>
        </div>
      </div>
    </Loading>
  );
};

export default DetailsOrderPage;

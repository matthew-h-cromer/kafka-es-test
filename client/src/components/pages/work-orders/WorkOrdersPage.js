import React from 'react';
// Styled components
import styled from 'styled-components';
// Ant Design
import { Table, AutoComplete, Input } from 'antd';
// Custom components
import Logo from '../../Logo/Logo';

const Container = styled.div`
  height: 100%;
`;

const TitleBar = styled.div`
  padding: 15px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.div`
  font-size: 36px;
`;

const PageContent = styled.div`
  margin: 0 30px;
  height: calc(100vh - 30px - 56px - 30px);
  border-radius: 10px;
  background-color: #f3f3f3;
  padding: 15px;
`;

export default function WorkOrdersPage({ title }) {
  return (
    <Container>
      <TitleBar>
        <Title>{title}</Title>
        <Logo />
      </TitleBar>
      <PageContent>
        <AutoComplete
          dropdownClassName='certain-category-search-dropdown'
          dropdownMatchSelectWidth={500}
          style={{ width: 250 }}
          options={[
            { value: "Here's an autocomplete val for u" },
            { value: 'aaaaand another' },
            { value: '...and another wow' },
          ]}>
          <Input.Search size='large' placeholder='input here' />
        </AutoComplete>
        <Table
          style={{ paddingTop: '25px' }}
          columns={columns}
          dataSource={data}
          bordered
          rowSelection={{ fixed: true }}
          //title={() => 'Work Orders'}
          //footer={() => 'Footer'}
        />
      </PageContent>
    </Container>
  );
}

const columns = [
  {
    title: 'WO Number',
    dataIndex: 'workOrderNumber',
    //render: text => <a>{text}</a>,
  },
  {
    title: 'Part Number',
    dataIndex: 'partNumber',
    align: 'right',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Date Required',
    dataIndex: 'dateRequired',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];

const data = [
  {
    key: '1',
    workOrderNumber: '4001',
    partNumber: 'MRC12345',
    quantity: '1',
    dateRequired: '9/20/2020',
  },
  {
    key: '2',
    workOrderNumber: '4001',
    partNumber: 'MRC12345',
    quantity: '1',
    dateRequired: '9/20/2020',
  },
  {
    key: '3',
    workOrderNumber: '4001',
    partNumber: 'MRC12345',
    quantity: '1',
    dateRequired: '9/20/2020',
  },
  {
    key: '4',
    workOrderNumber: '4001',
    partNumber: 'MRC12345',
    quantity: '1',
    dateRequired: '9/20/2020',
  },
  {
    key: '5',
    workOrderNumber: '4001',
    partNumber: 'MRC12345',
    quantity: '1',
    dateRequired: '9/20/2020',
  },
];

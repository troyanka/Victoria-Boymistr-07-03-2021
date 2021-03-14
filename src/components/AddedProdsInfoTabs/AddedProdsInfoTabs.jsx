import { useSelector } from 'react-redux';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProductsGrid } from '../ProductsGrid/ProductsGrid';
import { StoresList } from '../StoresList/StoresList';

const AddedProdsInfoTabs = () => {

  const addedItems = useSelector(({ shoppingListReducer }) => shoppingListReducer.addedItems);
  const addedStoresData = useSelector(({ shoppingListReducer }) => shoppingListReducer.addedStoresData);
  const currencyRates = useSelector(({ shoppingListReducer }) => shoppingListReducer.currencyRates); 

  return (
    <Tabs>
      <TabList>
        <Tab>Bought Items</Tab>
        <Tab>Stores List</Tab>
      </TabList>

      <TabPanel>
        <ProductsGrid items={addedItems} currencyRates={currencyRates}/>
      </TabPanel>
      <TabPanel>
        <StoresList storesData={addedStoresData} />
      </TabPanel>
    </Tabs>
  );
}

export default AddedProdsInfoTabs;
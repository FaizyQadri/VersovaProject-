import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header/Header';
import {useTestDemo} from './TestDemo.hooks';

interface ChildTab {
  child_tab_title: string;
}

interface Tab {
  title: string;
  child_tabs: ChildTab[];
}

const TestDemo: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [childIndex, setChildIndex] = useState<number>(0);

  const {loading, title} = useTestDemo();

  const tabs: Tab[] = [
    {
      title: 'People',
      child_tabs: [
        {child_tab_title: 'Athlete'},
        {child_tab_title: 'Coach'},
        {child_tab_title: 'Organisation Admin'},
      ],
    },
    {
      title: 'Itinerary',
      child_tabs: [
        {child_tab_title: 'Athlete Itinerary'},
        {child_tab_title: 'Coach Itinerary'},
        {child_tab_title: 'Organisation Admin Itinerary'},
      ],
    },
    {
      title: 'Checklist',
      child_tabs: [
        {child_tab_title: 'checkone'},
        {child_tab_title: 'Coach'},
        {child_tab_title: 'check Admin'},
      ],
    },
    {
      title: 'Session',
      child_tabs: [
        {child_tab_title: 'sessio1'},
        {child_tab_title: 'Coach'},
        {child_tab_title: 'session Admin'},
      ],
    },
  ];

  const onTabChange = (selectedIndex: number) => {
    setIndex(selectedIndex);
    setChildIndex(0); // Reset child index when parent tab changes
  };

  const onChildTabChange = (selectedChildIndex: number) => {
    setChildIndex(selectedChildIndex);
  };

  const renderParentTab = ({
    item,
    index: parentIndex,
  }: {
    item: Tab;
    index: number;
  }) => (
    <TouchableOpacity
      style={styles.tabWrapper}
      onPress={() => onTabChange(parentIndex)}>
      <View style={[styles.tab, index === parentIndex && styles.selectedTab]}>
        <Text
          style={[styles.tabText, index === parentIndex && styles.slectedText]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderChildTab = ({
    item,
    index: childTabIndex,
  }: {
    item: ChildTab;
    index: number;
  }) => (
    <TouchableOpacity
      style={[
        styles.childTab,
        childIndex === childTabIndex ? styles.selectedChildTab : null,
      ]}
      onPress={() => onChildTabChange(childTabIndex)}>
      <Text
        style={[
          styles.childtabText,
          childIndex === childTabIndex && styles.childslectedText,
        ]}>
        {item.child_tab_title}
      </Text>
    </TouchableOpacity>
  );

  const itemSeprator = () => <View style={styles.seprator} />;

  return (
    <View style={styles.container}>
      <Header />
      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: '#fff',
          borderRadius: 8,
          marginBottom: 20,
          marginTop: 10,
          // padding: 20,
        }}>
        <View style={{padding: 10, paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Text
              numberOfLines={1}
              style={[
                styles.slectedText,
                {
                  flex: 1,
                  fontSize: 15,
                  fontWeight: 'bold',
                },
              ]}>
              {title}
            </Text>
            <Text
              style={[
                styles.slectedText,
                {
                  flex: 0.3,
                  textAlign: 'right',
                  fontSize: 15,
                  fontWeight: 'bold',
                },
              ]}>
              {'Training'}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              numberOfLines={1}
              style={[
                styles.slectedText,
                {
                  flex: 1,
                  fontSize: 15,
                },
              ]}>
              {'test + 1'}
            </Text>
            <Text
              style={[
                styles.slectedText,
                {
                  flex: 0.3,
                  textAlign: 'right',
                  color: 'red',
                  fontSize: 15,
                  fontWeight: 'bold',
                },
              ]}>
              {'Lonavala'}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 5,
            // borderWidth: 1,
            // justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: '#063710',
              marginLeft: -10,
            }}
          />
          <View
            style={{
              height: 1,
              backgroundColor: 'darkgrey',
              width: '100%',
              flex: 1,
            }}
          />
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: '#063710',
              marginRight: -10,
            }}
          />
        </View>
        <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Text
              numberOfLines={1}
              style={[
                styles.slectedText,
                {
                  flex: 0.3,
                  fontSize: 15,
                  // fontWeight: 'bold',
                },
              ]}>
              {'Tue'}
            </Text>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                textAlignVertical: 'bottom',
                bottom: -10,
              }}>
              {'3 Days'}
            </Text>
            <Text
              style={[
                styles.slectedText,
                {
                  flex: 0.3,
                  textAlign: 'center',
                  fontSize: 15,
                  // fontWeight: 'bold',
                },
              ]}>
              {'Thu'}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              numberOfLines={1}
              style={[
                styles.slectedText,
                {
                  flex: 0.3,
                  fontSize: 18,
                  fontWeight: 'bold',
                },
              ]}>
              {'1st Oct'}
            </Text>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: 'black',
                flex: 0.5,
                marginHorizontal: 20,
              }}
            />
            <Text
              style={[
                styles.slectedText,
                {
                  flex: 0.3,
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                },
              ]}>
              {'3rs Oct'}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <FlatList
          data={tabs}
          horizontal
          keyExtractor={item => item.title}
          renderItem={renderParentTab}
          ItemSeparatorComponent={itemSeprator}
        />
      </View>
      <View style={styles.childTabWrapper}>
        <View>
          <FlatList
            data={tabs[index].child_tabs}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.child_tab_title}
            renderItem={renderChildTab}
            style={styles.childTabContainer}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            {`Selected Tab: ${tabs[index].title} - ${tabs[index].child_tabs[childIndex].child_tab_title}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#063710',
  },
  tabContainer: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  tabWrapper: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 2.5,
    paddingVertical: 2.5,
    borderColor: '#ddd',
  },
  tab: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectedTab: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

    // marginHorizontal:10000: 4,
    // padding: 5,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  slectedText: {
    color: '#063710',
  },
  childtabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  childslectedText: {
    color: '#fff',
  },
  childTabContainer: {},
  childTab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    marginHorizontal: 5,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'darkgrey',
  },
  selectedChildTab: {
    backgroundColor: '#063710',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seprator: {
    padding: 10,
  },
  childTabWrapper: {
    backgroundColor: '#fff',
    flexGrow: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});

export default TestDemo;

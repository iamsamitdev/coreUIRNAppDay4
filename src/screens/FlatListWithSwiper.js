import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  Animated,
} from 'react-native'
import React, { useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import Notifications from './../model/Notifications'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const FlatListWithSwiper = () => {

  const [listData, setListData] = useState(
    Notifications.map((NotificationItem, index) => ({
      key: `${index}`,
      title: NotificationItem.title,
      details: NotificationItem.details,
    })),
  )

  // ฟังก์ชันปิดตัว List
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow()
    }
  }

  // ฟังก์ชันลบรายการ List
  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey)
    const newData = [...listData]
    const prevIndex = listData.findIndex(item => item.key === rowKey)
    newData.splice(prevIndex, 1)
    setListData(newData)
  }

  // ฟังก์ชันสำหรับแสดงรายการ Item
  const VisibleItem = (props) => {
    const { data } = props
    return (
      <TouchableHighlight style={styles.rowFrontVisible}>
        <View>
          <Text style={styles.title}>{data.item.title}</Text>
          <Text style={styles.details}>{data.item.details}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  // สร้างฟังก์ชันไว้ Render Item
  const renderItem = (data, rowMap) => {
    return <VisibleItem data={data} />
  }

  // สร้าง component HiddenItemWithActions
  const HiddenItemWithActions = (props) => {
    const {onClose, onDelete} = props
    return (
      <View style={styles.rowBack}>
        <Text>Left</Text>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={onClose}>
            {/* <Text style={{color: '#ffffff'}}>Close</Text> */}
            <MaterialCommunityIcons 
              name="close-circle-outline"
              size={25}
              color="#ffffff"
              style={styles.trash}
            />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onDelete}>
            {/* <Text style={{color: '#ffffff'}}>Delete</Text> */}
            <MaterialCommunityIcons 
              name="trash-can-outline"
              size={25}
              color="#ffffff"
              style={styles.trash}
            />
        </TouchableOpacity>
      </View>
    )
  }

  // สร้างฟังก์ชันสำหรับ renderHiddenItem
  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions 
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    )
  }

  return (
    <SafeAreaView>
      <Text style={styles.textTitle}>Notifications</Text>
      <SwipeListView 
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe
      />
    </SafeAreaView>
  )
}

export default FlatListWithSwiper

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFFFFF',
  },
  rowFront: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 61,
    margin: 5,
    marginBottom: 15,
    shadowColor: '#999999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 61,
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666666',
  },
  details: {
    fontSize: 12,
    color: '#999999',
  },
  textTitle: {
    fontSize: 20,
    padding: 10,
  },
})

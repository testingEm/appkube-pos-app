import React, { useEffect } from 'react';
import { Button, View, Text, Platform } from 'react-native';

let EscPosPrinter;

// if (Platform.OS !== 'web') {
//   EscPosPrinter = require('react-native-esc-pos-printer');
// }

const ThermalPrinterComponent = () => {
  useEffect(() => {
    // Ensure Bluetooth is connected to the printer
    // For simplicity, you might want to trigger this from a button press or another event
    connectToPrinter();

    // Cleanup when the component unmounts
    return () => {
      disconnectFromPrinter();
    };
  }, []);

  const connectToPrinter = async () => {
    try {
      if (EscPosPrinter) {
        const devices = await EscPosPrinter.getBluetoothDevices();
        if (devices.length > 0) {
          const printerAddress = devices[0].address; // Use the address of your thermal printer
          await EscPosPrinter.connectPrinter(printerAddress);
        } else {
          console.log('No Bluetooth printers found.');
        }
      } else {
        console.log('Printer functionality not available on the web.');
      }
    } catch (error) {
      console.error('Error connecting to printer:', error);
    }
  };

  const disconnectFromPrinter = async () => {
    try {
      if (EscPosPrinter) {
        await EscPosPrinter.disconnectPrinter();
      }
    } catch (error) {
      console.error('Error disconnecting from printer:', error);
    }
  };

  const printBill = async () => {
    try {
      if (EscPosPrinter) {
        // Print the header
        await EscPosPrinter.printText('Your Company Name\n');
        await EscPosPrinter.printText('--------------------------------\n');

        // Print items
        await EscPosPrinter.printText('Item 1: $10.00\n');
        await EscPosPrinter.printText('Item 2: $15.00\n');
        // Add more items as needed

        // Print total
        await EscPosPrinter.printText('--------------------------------\n');
        await EscPosPrinter.printText('Total: $25.00\n');

        // Cut paper
        await EscPosPrinter.cutPaper();
      } else {
        console.log('Printer functionality not available on the web.');
      }
    } catch (error) {
      console.error('Error printing bill:', error);
    }
  };

  return (
    <View>
      <Button title="Print Bill" onPress={printBill} />
    </View>
  );
};

export default ThermalPrinterComponent;

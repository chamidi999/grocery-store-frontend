import type { DeliverySlot, DeliveryStatusStep } from '../types/delivery'

export const deliverySlots: DeliverySlot[] = [
  { id: 'slot-1', label: 'Morning', from: '8:00 AM', to: '11:00 AM', fee: 4.99 },
  { id: 'slot-2', label: 'Afternoon', from: '12:00 PM', to: '3:00 PM', fee: 3.49 },
  { id: 'slot-3', label: 'Evening', from: '5:00 PM', to: '8:00 PM', fee: 5.99 },
]

export const trackingSteps: DeliveryStatusStep[] = [
  { status: 'pending', label: 'Order pending', timestamp: '10:05 AM' },
  { status: 'confirmed', label: 'Order confirmed', timestamp: '10:12 AM' },
  { status: 'packed', label: 'Packed and ready', timestamp: '11:00 AM' },
  { status: 'out_for_delivery', label: 'Out for delivery', timestamp: '12:30 PM' },
  { status: 'delivered', label: 'Delivered', timestamp: '2:00 PM' },
]

import { TagIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const salesType = defineType({
  name: 'sale',
  title: 'Sale',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Sale Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Sale Description'
    }),
    defineField({
      name: 'discountAmount',
      title: 'Discount Amount',
      type: 'number',
      description: 'Amount off in percentage or fixed value'
    }),
    defineField({
      name: 'couponCode',
      type: 'string',
      title: 'Coupon Code',
    }),
    defineField({
      name: 'validFrom',
      type: 'datetime',
      title: 'Valid From'
    }),
    defineField({
      name: 'validUntil',
      type: 'datetime',
      title: 'Valid Until',
    }),
    defineField({
      name: 'isActive',
      type: 'boolean',
      title: 'Is Active',
      description: 'Toggle to activate/deactivate the sale',
      initialValue: true,
    })
  ],

  preview: {
    select: {
      title: 'title',
      discountAmount: 'discountAmount',
      couponCode: 'couponCode',
      isActive: 'isActive',
    },
    prepare(select) {
      const { title, discountAmount, couponCode, isActive } = select;
      const status = isActive ? 'Active' : 'Inactive';
      return {
        title,
        subtitle: `${discountAmount}% off - Code: ${couponCode} - ${status}`
      }
    }
  }
})
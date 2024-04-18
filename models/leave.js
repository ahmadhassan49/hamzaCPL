/*
 const { DataTypes } = require('sequelize');
 const { User } = require('./user')(sequelize, DataTypes);

 module.exports = (sequelize) => {
     const LeaveHistory = sequelize.define('LeaveHistory', {
         start_date: { type: DataTypes.DATE, allowNull: false },
         end_date: { type: DataTypes.DATE, allowNull: false },
         reason: { type: DataTypes.TEXT, allowNull: false },
         leave_type: {
             type: DataTypes.ENUM('Sick Leave', 'Casual Leave', 'Annual Leave', 'Short Leave', 'Half Leave'),
             allowNull: false
         },
         approved_by: { type: DataTypes.INTEGER, allowNull: true }, // Assuming User ID
         is_approved: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
         status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Pending' }
     }, {
         tableName: 'leave_history',
         timestamps: true
     });

     // Define associations if needed
     // Leave.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
     // Leave.belongsTo(User, { foreignKey: 'approved_by', as: 'approver' });
     LeaveHistory.belongsTo(User, { foreignKey: 'user_id', as: 'user' });




     const LeaveQuota = sequelize.define('LeaveQuota', {
         user_id: { type: DataTypes.INTEGER, allowNull: false, unique: true },
         annualQuota: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
         sickQuota: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
         casualQuota: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
     }, {
         tableName: 'leave_quota',
         timestamps: true
     });

     LeaveQuota.belongsTo(User, { foreignKey: 'user_id', as: 'user' });


     // return Leave;
 };

*/


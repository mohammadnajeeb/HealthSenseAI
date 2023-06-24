import {Task} from '../models/task.js';

export const newTask = async (req, res,next) => {
    
    const {title, description, medicalHistory, familyHistory, lifestyle, vitalSigns, allergies, medication, immunizations, testResults, emergencyContacts} = req.body;
    
    await Task.create({
        title,
      description,
      user: req.existingUser,
      medicalHistory,
      familyHistory,
      lifestyle,
      vitalSigns,
      allergies,
      medication,
      immunizations,
      testResults,
      emergencyContacts,
    });

    res.status(201).json({
        success:true,
        message:"Task created successfully",
    });
};

export const getMyTask = async (req, res,next) => {
    const userid = req.existingUser._id;

    const tasks = await Task.find({user:userid});

    res.status(200).json({
        success:true,
        tasks,
    });
};

export const updateTask = async (req, res,next) => {
    const task = await Task.findById(req.params.id);

    if(!task) return res.status(404).json({
        success:false,
        message:"Invalid ID",
    });

    task.iscompleted = !task.iscompleted;
    await task.save();

    res.status(200).json({
        success:true,
        message:"Task updated successfully",
    });
};

export const deleteTask = async (req, res,next) => {

    const task = await Task.findById(req.params.id);

    if(!task) return res.status(404).json({
        success:false,
        message:"Task not found",
    });

    await task.deleteOne();


    res.status(200).json({
        message:"Task deleted successfully",
        success:true,
    });
};
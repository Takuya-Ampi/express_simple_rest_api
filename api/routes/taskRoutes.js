import taskControllers from '../controllers/taskController'
const router = express.Router()


router.route('/tasks')
  .get(taskControllers.all_tasks)
  .post(taskControllers.create_task)
router.route('/tasks/:taskId')
  .get(taskControllers.load_task)
  .put(taskControllers.update_task)
  .delete(taskControllers.delete_task)

export default Routes

const router = express.Router()

const taskList = require('../controllers/taskController');

router.route('/tasks')
  .get(taskList.all_tasks)
  .post(taskList.create_task)
router.route('/tasks/:taskId')
  .get(taskList.load_task)
  .put(taskList.update_task)
  .delete(taskList.delete_task)
export default Routes

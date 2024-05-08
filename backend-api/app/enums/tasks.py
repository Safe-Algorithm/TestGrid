from enum import Enum


class TaskStatusEnum(str, Enum):
    drafted = 'DRAFTED'
    pending = 'PENDING'
    running = 'RUNNING'
    success = 'SUCCESS'
    canceled = 'CANCELED'
    failed = 'FAILED'

class TaskField(str, Enum):
    penetration_test = 'penetration_test'
    limit_test = 'limit_test'

class TaskType(str, Enum):
    network_scan = "network_scan"
    web_sql_scan = 'web_sql_scan'
    web_js_scan = 'web_js_scan'
    web_dir_enumeration_scan = 'web_dir_enumeration_scan'
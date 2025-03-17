import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import AddUser from '../AddUser/AddUser';

interface User {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  birthDate: string;
}

export default function User() {
  const [users, setUsers] = useState<User[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);



  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://dummyjson.com/users');
      setUsers(response.data.users);
    } catch (error) {
      toast.error("Error loading users, please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async () => {
    if (!selectedUserId) return;
    try {
      await axios.delete(`https://dummyjson.com/users/${selectedUserId}`);
      setUsers(users.filter(user => user.id !== selectedUserId));
      toast.success("User deleted successfully.");

      setShowDeleteModal(false);
    } catch (error) {
      toast.error("An error occurred while deleting, please try again.");

    }
  };

  const updatedate = () => {
    getUsers();
  };

  return (
    <div>
      <div className='d-flex justify-content-between mx-2 mt-2'>
        <h3>  List of users  </h3>
        <button className='btn btn-warning text-white' onClick={() => {
          setSelectedUserId(null); // إعادة تعيين userId لإضافة مستخدم جديد
          setShowEditModal(true);
        }}>
       Add a new user
        </button>
      </div>
      <hr />

      <div className='mt-3'>
        {loading ? (
          <div className='d-flex justify-content-center align-items-center vh-100'>
            <Oval height="80" width="80" color="#4fa94d" />
          </div>
        ) : (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>image</th>
                <th> first Name</th>
                <th> Last Name</th>
                <th> Email</th>
                <th> Phone</th>
                <th>BirthDate </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <img src={user.image} alt={user.firstName} className="rounded-circle" width="50" height="50" />
                  </td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.birthDate}</td>
                  <td>
                    <CiEdit
                      className='text-warning mx-2 cursor-pointer'
                      size={25}
                      onClick={() => {
                        setSelectedUserId(user.id);
                        setShowEditModal(true);
                      }}
                    />
                    <MdDelete
                      className='text-danger cursor-pointer'
                      size={25}
                      onClick={() => {
                        setSelectedUserId(user.id);
                        setShowDeleteModal(true);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>

      {/* مودال الحذف */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>   Confirm deletion    </Modal.Title>
        </Modal.Header>
        <Modal.Body>     Are you sure you want to delete this user? </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteUser}>
            Delete
          </Button>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
          close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* مودال التعديل */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size='xl'>
    
        <Modal.Body>
          <AddUser updatedate={updatedate} userId={selectedUserId} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
          close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
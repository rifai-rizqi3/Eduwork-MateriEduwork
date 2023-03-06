import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        setValidated(true);
        alert(`
        Nama : ${myVal.namaDpn} ${myVal.namaBlk}
        Nama Pengguna : ${myVal.namaPggn}
        Email : ${myVal.email}
        Password : ${myVal.psswrd}
        kota : ${myVal.kota}
        Provinsi : ${myVal.prov}
        Kode Pos : ${myVal.kodPS}
        Member : ${myVal.mmber ? 'YES' : 'NO'}

        `);
    };

    const [myVal, setMyVal] = useState({
        namaDpn: '',
        namaBlk: '',
        namaPggn: '',
        email: '',
        psswrd: '',
        kota: '',
        prov: '',
        kodPs: 0,
        mmber: true
    })

    const handleInputChange = (event) => {
        setMyVal({
            ...myVal,
            [event.currentTarget.name] : event.currentTarget.value
        })
    }

    // const submi = (event) => {
    //     event.preventDefault();
        
    // }


    const style = {
        width: '650px',
        margin: '100px auto 0',
        border: '5px solid grey',
        padding: '10px',
        borderRadius: '10px'
    }

    return (
        <div style={style}>
            <h1>Log In</h1>
            <br />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        
        <Row className="mb-4">
            <Form.Group controlId="validationCustom01">
            <Form.Label>Nama Depan</Form.Label>
            <Form.Control
                required
                name='namaDpn'
                type="text"
                placeholder="Nama Depan"
                onChange={handleInputChange}
                // defaultValue="Mark"
            />
            <Form.Control.Feedback type="invalid">
                Masukan Nama Depan 
            </Form.Control.Feedback>
            <Form.Control.Feedback>Mantap..!!!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationCustom02">
            <Form.Label>Nama Belakang</Form.Label>
            <Form.Control
                required
                name='namaBlk'
                type="text"
                placeholder="Nama Belakang"
                onChange={handleInputChange}
                // defaultValue="Otto"
            />
            <Form.Control.Feedback type="invalid">
                Masukan Nama Belakang
            </Form.Control.Feedback>
            <Form.Control.Feedback>Mantap..!!!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustomUsername">
            <Form.Label>Nama Pengguna</Form.Label>
            <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                type="text"
                name='namaPggn'
                onChange={handleInputChange}
                placeholder="Nama Pengguna"
                aria-describedby="inputGroupPrepend"
                required
                />
                <Form.Control.Feedback type="invalid">
                Pilih Nama Pengguna.
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
        </Row>
        
        <Row>
        <Form.Group as={Col} md='6' controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" required name='email' onChange={handleInputChange} />
        <Form.Control.Feedback type="invalid">
                Masukan Email Anda
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
        Kami tidak akan pernah membagikan email Anda kepada orang lain.
            </Form.Text>
        </Form.Group>

        <Form.Group as={Col} md='6' controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
            type="password"
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            required
            name='psswrd'
            onChange={handleInputChange}
        />
        <Form.Control.Feedback type="invalid">
                Masukan Password Anda
        </Form.Control.Feedback>
        <Form.Text id="passwordHelpBlock" muted>
        Kata sandi Anda harus terdiri dari 8-20 karakter, berisi huruf dan angka,
            dan tidak boleh mengandung spasi, karakter khusus, atau emoji.
        </Form.Text>
        </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Kota</Form.Label>
            <Form.Control type="text" placeholder="Kota" required name='kota' onChange={handleInputChange}/>
            <Form.Control.Feedback type="invalid">
                Masukan Kota.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Provinsi</Form.Label>
            <Form.Control type="text" placeholder="Provinsi" required name='prov'onChange={handleInputChange}/>
            <Form.Control.Feedback type="invalid">
                Masukan Provinsi.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Kode Pos</Form.Label>
            <Form.Control type="text" placeholder="Kode Pos" required name='kodPs' onChange={handleInputChange}/>
            <Form.Control.Feedback type="invalid">
                Masukan Kode Pos.
            </Form.Control.Feedback>
            </Form.Group>
        </Row>
        
        <Form.Group className="mb-3">
            <Form.Check
            required
            label="Sesuai dengan Syarat dan Ketentuan"
            feedback="Harus setuju dengan Syarat yang berlaku"
            feedbackType="invalid"
            name='mmber'
            onChange={handleInputChange}
            />
        </Form.Group>
        <Button type="submit">Submit form</Button>
        </Form>
        </div>
    );
}

// render(<FormExample />);

export default FormExample;